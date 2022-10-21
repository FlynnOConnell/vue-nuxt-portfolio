// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	head: {
		title: "vue-nuxt-portfolio",
		htmlAttrs: {
			lang: "scss",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "./public/icons/favicon.png" }],
		script: [
			{
				src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
				body: true,
			},
			{
				src: "https://cdn.jsdelivr.net/npm/vue-tippy@4/dist/vue-tippy.min.js",
				client: true,
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"~/assets/css/normalize.css",
		"@/assets/css/main.css",
		"@/assets/css/styles.css",
		"@/assets/css/fonts.css",
		"@fortawesome/fontawesome-svg-core/styles.css",
	],


	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	modules: ['@nuxtjs/tailwindcss'],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons'
        ]
    }
});
