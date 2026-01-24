import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import { createRequire } from "node:module";
import { Effect, Either } from "effect";
import type { Connect, Plugin, ViteDevServer } from "vite";

export interface FaviconOptions {
	/**
	 * The source of the favicon. Can be a file path, module ID, or direct content.
	 * Currently supports SVG string content or path/module ID resolving to an SVG file.
	 */
	icon: string;
	/**
	 * The type of the icon.
	 * @default 'svg'
	 */
	type?: "svg";
	/**
	 * The output filename.
	 * @default 'favicon.svg'
	 */
	name?: string;
}

export function prerenderFavicon(options: FaviconOptions): Plugin {
	const { icon: iconInput, name = "favicon.svg" } = options;

	const getIconContent = Effect.gen(function* () {
		if (!iconInput) {
			return yield* Effect.fail(new Error("Icon path is required"));
		}

		if (iconInput.trim().startsWith("<")) {
			return iconInput;
		}

		const require = createRequire(import.meta.url);

		const resolvedPath = yield* Effect.try({
			try: () => require.resolve(iconInput),
			catch: (error) =>
				new Error(
					`Failed to resolve icon path: ${iconInput}. Error: ${String(error)}`,
				),
		});

		const content = yield* Effect.try({
			try: () => fs.readFileSync(resolvedPath, "utf-8"),
			catch: (error) =>
				new Error(
					`Failed to read file: ${resolvedPath}. Error: ${String(error)}`,
				),
		});

		return content;
	});

	// Run synchronously as Vite config loading is generally synchronous for plugins setup
	const result = Effect.runSync(Effect.either(getIconContent));

	let iconContent: string | undefined;

	if (Either.isRight(result)) {
		iconContent = result.right;
	} else {
		// Log warning but don't crash build
		console.warn(`[vite-plugin-prerender-favicon] ${result.left.message}`);
	}

	return {
		name: "vite-plugin-prerender-favicon",
		generateBundle() {
			if (iconContent) {
				this.emitFile({
					type: "asset",
					fileName: name,
					source: iconContent,
				});
			}
		},
		configureServer(server: ViteDevServer) {
			if (!iconContent) return;

			server.middlewares.use(
				(
					req: IncomingMessage,
					res: ServerResponse,
					next: Connect.NextFunction,
				) => {
					if (req.url === `/${name}`) {
						res.setHeader("Content-Type", "image/svg+xml");
						res.end(iconContent);
						return;
					}
					next();
				},
			);
		},
		transformIndexHtml(html: string) {
			if (!iconContent) return html;

			return {
				html,
				tags: [
					{
						tag: "link",
						attrs: {
							rel: "icon",
							type: "image/svg+xml",
							href: `/${name}`,
						},
						injectTo: "head" as const,
					},
				],
			};
		},
	};
}
