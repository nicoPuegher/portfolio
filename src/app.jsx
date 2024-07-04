import useDynamicMargin from '@hooks/useDynamicMargin.js';

import { Navbar } from './layouts/navbar/index.js';
import Page from '@layouts/page.jsx';

export default function App() {
	useDynamicMargin();

	return (
		<>
			<Navbar />
			<Page />
		</>
	);
}
