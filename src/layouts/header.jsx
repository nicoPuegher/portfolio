import React from 'react';

import { Box } from '@chakra-ui/react';

import PropTypes from 'prop-types';

import * as Navbar from '@layouts/navbar';

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
			w="full"
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
