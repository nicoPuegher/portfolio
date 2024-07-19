module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'airbnb',
		'airbnb/hooks',
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: {
		react: { version: '18.2' },
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
					['@components', './src/components'],
					['@constants', './src/constants'],
					['@layouts', './src/layouts'],
					['@lib', './src/lib'],
				],
				extensions: ['.js', '.jsx'],
			},
		},
	},
	plugins: ['react-refresh'],
	rules: {
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react-refresh/only-export-components': 'warn',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: ['**/vite.config.js'],
			},
		],
		'react/jsx-no-bind': 'off',
		quotes: 'off',
	},
};
