import { extendTheme } from '@chakra-ui/react';

import Container from './container-theme';

const theme = extendTheme({
	fonts: {
		heading: 'Inter variable, sans-serif',
		body: 'Inter variable, sans-serif',
	},
	styles: {
		global: {
			'#root': {
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
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
