import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vuetify from "@vuetify/vite-plugin";

const path = require("path");

/**
 * html template (variables)
 * --------------------------------
 * */
import htmlTemplate from "vite-plugin-html-template";
const VERSION_ID = Math.random() * 10000;
const title = "ColaboMaterial Vuetify3 + vue3 + vite - Preview";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// html template (variables)
		{
			...htmlTemplate({
				data: {
					title,
					version: VERSION_ID,
				},
			}),
			// https://vitejs.dev/guide/using-plugins.html#enforcing-plugin-ordering
			enforce: "pre",
		},
		// htmlTemplate({
		// 	data: {
		// 		title,
		// 		version: VERSION_ID,
		// 	},
		// }),
		vue(),
		vueJsx({
			// options are passed on to @vue/babel-plugin-jsx
		}),
		// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
		vuetify({
			autoImport: true,
		}),
	],
	// define: { "process.env": {} },
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	/* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
});
