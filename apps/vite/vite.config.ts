import tailwindcss from "@tailwindcss/vite";
import { prerenderFavicon } from "@verne/utils";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		prerenderFavicon({
			icon: "@verne/assets/logo.svg",
		}),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
	],
});
