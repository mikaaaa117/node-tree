import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: "components",
				replacement: path.resolve(__dirname, "src", "components")
			},
			{ find: "ui", replacement: path.resolve(__dirname, "src", "ui") },
			{
				find: "helpers",
				replacement: path.resolve(__dirname, "src", "helpers")
			}
		]
	}
});
