import React from 'react';

import { Box } from '@chakra-ui/react';

import * as Navbar from '@layouts/navbar';

import PropTypes from 'prop-types';

export default function Header() {
	return (
		<CustomBox>
			<Navbar.Nav>
				<Navbar.Logo />
				<Navbar.Menu />
				<Box>
					<Navbar.ThemeToggle />
					<Navbar.MenuMobile />
				</Box>
			</Navbar.Nav>
		</CustomBox>
	);
}

function CustomBox({ children }) {
	return (
		<Box
			as="header"
			pos="sticky"
			w="100%"
			top={0}
			backgroundColor="black"
			backdropFilter="blur(10px)"
		>
			{children}
		</Box>
	);
}
CustomBox.propTypes = {
	children: PropTypes.node.isRequired,
};
