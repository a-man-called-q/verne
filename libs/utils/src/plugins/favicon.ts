import type { Plugin } from "vite";

export interface FaviconOptions {
	/**
	 * The source of the favicon. Can be a file path or direct content.
	 * Currently supports SVG string content or path.
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
	const { icon, name = "favicon.svg" } = options;

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
