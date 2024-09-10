import React from 'react';

import useScroll from './hooks/useScroll';
import Header from './layouts/header';
import Main from './layouts/main';
import Footer from './layouts/footer';

export default function App() {
	useScroll();

	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}
