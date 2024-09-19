import { fileURLToPath } from 'url';
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
	base: '/portfolio/',
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(dirname, './src'),
			'@assets': path.resolve(dirname, './src/assets'),
			'@components': path.resolve(dirname, './src/components'),
			'@constants': path.resolve(dirname, './src/constants'),
			'@layouts': path.resolve(dirname, './src/layouts'),
			'@lib': path.resolve(dirname, './src/lib'),
			'@pages': path.resolve(dirname, './src/pages'),
			'@store': path.resolve(dirname, './src/store'),
		},
	},
});
