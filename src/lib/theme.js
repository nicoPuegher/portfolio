import { extendTheme } from '@chakra-ui/react';

import Container from './container-theme';

const config = {
	initialColorMode: 'system',
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,
	fonts: {
		heading: 'Inter, sans-serif',
		body: 'Inter, sans-serif',
	},
	styles: {
		global: {
			'#root': {
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				letterSpacing: '0.025rem',
			},
		},
	},
	sizes: {
		half: '50%',
	},
	components: {
		Container,
	},
});

export default theme;
