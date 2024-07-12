module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'airbnb',
		'airbnb/hooks',
	],
	ignorePatterns: ['.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: {
		react: { version: '18.2' },
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
					['@layouts', './src/layouts'],
				],
				extensions: ['.js', '.jsx'],
			},
		},
	},
	plugins: ['react-refresh'],
	rules: {
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
	},
};
