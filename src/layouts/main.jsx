import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Context from '@store/context';
import Home from '@pages/home';
import About from '@pages/about';
import Works from '@pages/works';
import SortingVisualizer from '@/pages/works/sorting-visualizer';

export default function Main() {
	const context = useContext(Context);

	return (
		<CustomBox>
			{context.page === 'home' && <Home />}
			{context.page === 'about' && <About />}
			{context.page === 'works' && <Works />}
			{context.page === 'sortingVisualizer' && <SortingVisualizer />}
		</CustomBox>
	);
}

function CustomBox({ children }) {
	return (
		<Box
			as="main"
			flexGrow="1"
			maxW="container.md"
			px={2}
			py={10}
			mx="auto"
			display="flex"
			flexDirection="column"
		>
			{children}
		</Box>
	);
}
CustomBox.propTypes = {
	children: PropTypes.node.isRequired,
};
