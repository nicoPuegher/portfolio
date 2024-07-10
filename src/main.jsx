import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '@lib/theme';

import App from './app';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</StrictMode>,
);
