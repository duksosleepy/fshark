import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
	plugins: [tailwindcss()],
	clearScreen: false,
	server: {
		watch: {
			ignored: [
				"*.fs", // Don't watch F# files
			],
		},
	},
});
