//import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
	modules: ['nuxt-icon', '@nuxtjs/google-fonts', '@pinia/nuxt', '@nuxt/image'],
	sourcemap: {
		server: false,
		client: false,
	},
	css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@/assets/global.css'],
	build: {
		transpile: ['vuetify'],
	},
	googleFonts: {
		families: {
			'Montserrat+Alternates': [100, 200, 300, 400, 500, 600, 700, 800, 900],
			useStylesheet: true,
		},
	},
	app: {
		head: {
			link: [],
		},
	},
});
