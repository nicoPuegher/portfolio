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
		'prettier',
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: {
		react: { version: '18.2' },
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
					['@assets', './src/assets'],
					['@components', './src/components'],
					['@constants', './src/constants'],
					['@layouts', './src/layouts'],
					['@lib', './src/lib'],
					['@pages', './src/pages'],
					['@store', './src/store'],
				],
				extensions: ['.js', '.jsx'],
			},
		},
	},
	plugins: ['react-refresh'],
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-no-bind': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react-refresh/only-export-components': 'warn',
		'react/require-default-props': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: ['**/vite.config.js'],
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: [
					'builtin',
					'external',
					'internal',
					['parent', 'sibling', 'index'],
					'object',
					'type',
					'unknown',
				],
				pathGroups: [
					{
						pattern: '@{components,lib,layouts,pages,store}/**',
						group: 'internal',
					},
					{
						pattern: '@{assets,constants}/**',
						group: 'sibling',
					},
				],
				pathGroupsExcludedImportTypes: ['internal'],
			},
		],
	},
};
