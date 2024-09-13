import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';

import ContextProvider from './store/provider';
import Fonts from './components/fonts';
import App from './app';
import theme from './lib/theme';

createRoot(document.getElementById('root')).render(
	<>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<StrictMode>
			<ContextProvider>
				<ChakraProvider theme={theme}>
					<Fonts />
					<App />
				</ChakraProvider>
			</ContextProvider>
		</StrictMode>
	</>,
);
