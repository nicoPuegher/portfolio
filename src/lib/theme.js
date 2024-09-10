import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import Container from './container-theme';
import { light, dark } from './colors';

const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: true,
	},
	fonts: {
		heading: 'Inter, sans-serif',
		body: 'Inter, sans-serif',
	},
	styles: {
		global: (props) => ({
			body: {
				color: mode(light.textDark, dark.textLight)(props),
				bg: mode(light.bgLight, dark.bgDark)(props),
			},
			'#root': {
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				letterSpacing: '0.025rem',
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
