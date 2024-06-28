import useDynamicMargin from '@hooks/useDynamicMargin.js';

import Navbar from '@layouts/Navbar.jsx';
import Page from '@layouts/Page.jsx';

export default function App() {
	useDynamicMargin();

	return (
		<>
			<Navbar />
			<Page />
		</>
	);
}
