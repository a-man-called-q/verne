import fs from "node:fs";
import { createRequire } from "node:module";
import type { Plugin } from "vite";

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
	let { icon, name = "favicon.svg" } = options;

	// Resolve icon if it appears to be a path or module ID (doesn't start with SVG tag)
	if (icon && !icon.trim().startsWith("<")) {
		try {
			const require = createRequire(import.meta.url);
			const resolvedPath = require.resolve(icon);
			icon = fs.readFileSync(resolvedPath, "utf-8");
		} catch (error) {
			console.warn(
				`[vite-plugin-prerender-favicon] Failed to resolve icon path: ${icon}. Assuming it is content or invalid. Error:`,
				error,
			);
		}
	}

	return {
		name: "vite-plugin-prerender-favicon",
		// apply: "build", // Kita hapus apply: build biar jalan di dev juga
		generateBundle() {
			this.emitFile({
				type: "asset",
				fileName: name,
				source: icon,
			});
		},
		configureServer(server) {
			// Handle request ke /favicon.svg saat dev mode
			server.middlewares.use((req, res, next) => {
				if (req.url === `/${name}`) {
					res.setHeader("Content-Type", "image/svg+xml");
					res.end(icon);
					return;
				}
				next();
			});
		},
		transformIndexHtml(html: string) {
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
						injectTo: "head",
					},
				],
			};
		},
	};
}
