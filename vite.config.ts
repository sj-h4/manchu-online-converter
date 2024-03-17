import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import wasm from "vite-plugin-wasm";

export default defineConfig({
	base: "/manchu-online-converter/",
	build: {
		target: "esnext",
	},
	plugins: [solid(), wasm()],
});
