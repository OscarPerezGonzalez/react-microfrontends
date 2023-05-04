module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: ['plugin:react/recommended', 'eslint-config-prettier', 'standard'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
		'react/display-name': 'off',
		indent: [2, 'tab'],
		'no-tabs': 0,
		'comma-dangle': [2, 'always-multiline'],
		'space-before-function-paren': 'off',
	},
}
