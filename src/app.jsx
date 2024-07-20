import React, { useContext } from 'react';

import Context from '@store/context';

import Header from '@layouts/header';
import Main from '@layouts/main';

import Home from '@pages/home';
import About from '@pages/about';
import Works from '@pages/works';

export default function App() {
	const context = useContext(Context);

	return (
		<>
			<Header />
			<Main>
				{context.page === 'home' && <Home />}
				{context.page === 'about' && <About />}
				{context.page === 'works' && <Works />}
			</Main>
		</>
	);
}
