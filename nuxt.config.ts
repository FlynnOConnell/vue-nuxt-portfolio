
export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
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
		link: [
			{ 
				rel: "icon", type: "image/x-icon", href: "/favicon.png" 
			},

		],
		script: [
			{
				src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
				body: true,
			},
			{
				src: "https://cdn.jsdelivr.net/npm/vue-tippy@4/dist/vue-tippy.min.js",
				client: true,
			},
			{
				src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js",
				client: true,
			}
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

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{
			src: "~/plugins/tooltip.js",
			head: true,
		},
		{
			src: "~/plugins/fontawesome.js",
			head: true,
		},
		{
			src: "~/plugins/hljsVuePlugin.js",
			head: true,
		},
		{
			src: '~/plugins/directives.client.js'
		},
		{
			src: '~/plugins/vuetify.js',
		}
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		"@nuxt/typescript-build",
		"@nuxt/postcss8",
		"@nuxtjs/style-resources",
		"@nuxtjs/fontawesome",
		// With options
		['@nuxtjs/vuetify', {
			
			}
		],
		"@nuxtjs/svg",
	],
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		["nuxt-highlightjs"],
		"@nuxtjs/axios",
		"@nuxtjs/auth-next",
	],
	auth: {
		//options
	},
	svg: {
		vueSvgLoader: {
			// vue-svg-loader options
		},
		svgSpriteLoader: {
			// svg-sprite-loader options
		},
		fileLoader: {
			// file-loader options
		}
	},
	env: {
		spotifyClientID: process.env.SPOTIFY_CLIENT_ID,
		spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
		spotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN
	  },
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				"postcss-import": {},
				"tailwindcss/nesting": {},
				tailwindcss: {},
				autoprefixer: {},
			},
		},
		transpile: ['vuetify/lib']
	},

	fontawesome: {
		icons: {
			brands: ["faGithub", "faTwitter", "faLinkedin"],
		},
	},
	
};

