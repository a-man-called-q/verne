import logo from "@verne/assets/logo.svg";
import { prerenderFavicon } from "@verne/utils";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		prerenderFavicon({
			icon: logo, // Masukkan string SVG di sini
			name: "favicon.svg", // Opsional, default favicon.svg
		}),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
	],
});
