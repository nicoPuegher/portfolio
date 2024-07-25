import { extendTheme } from '@chakra-ui/react';

import '@fontsource-variable/inter';

const theme = extendTheme({
	fonts: {
		heading: `Inter variable, sans-serif`,
		body: `Inter variable, sans-serif`,
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
});

export default theme;
