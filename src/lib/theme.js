import { extendTheme } from '@chakra-ui/react';

import '@fontsource-variable/inter';

const theme = extendTheme({
	fonts: {
		heading: `'Inter variable', sans-serif`,
		body: `'Inter variable', sans-serif`,
	},
});

export default theme;
