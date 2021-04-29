module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
	],
	// add your custom rules here
	rules: {
		indent: ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'comma-dangle': ['error', 'always-multiline'],
		'space-before-function-paren': ['error', 'never'],
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'always',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			},
		],
		'vue/no-v-html': 0,
	},
}
