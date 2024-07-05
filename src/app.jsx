import useDynamicMargin from '@hooks/useDynamicMargin.js';

import ContextProvider from '@store/provider.jsx';
import { Navbar } from '@layouts/navbar/index.js';
import Page from '@layouts/page.jsx';

export default function App() {
	useDynamicMargin();

	return (
		<ContextProvider>
			<Navbar />
			<Page />
		</ContextProvider>
	);
}
