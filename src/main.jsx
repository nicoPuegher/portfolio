import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import ContextProvider from '@store/provider';
import theme from '@lib/theme';
import App from '@/app';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ContextProvider>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</ContextProvider>
	</StrictMode>,
);
