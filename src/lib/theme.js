import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import Container from './container-theme';
import { light, dark } from './colors';

const theme = extendTheme({
	config: {
		initialColorMode: 'system',
		useSystemColorMode: true,
	},
	fonts: {
		heading: 'Inter, sans-serif',
		body: 'Inter, sans-serif',
	},
	styles: {
		global: (props) => ({
			'#root': {
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				letterSpacing: '0.025rem',
				color: mode(light.textDark, '')(props),
				bg: mode(light.bgLight, '')(props),
			},
		}),
	},
	sizes: {
		half: '50%',
	},
	components: {
		Container,
	},
});

export default theme;
