import css from './configs/css'
import head from './configs/head'

export default {
	mode: 'universal',
	target: 'static',

	css,
	head,
	plugins: [],
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
	],
	modules: ['@nuxtjs/pwa'],
	build: {},
}
