import React from 'react';

import { Box } from '@chakra-ui/react';

import * as Navbar from '@layouts/navbar';

export default function Header() {
	return (
		<Box as="header" pos="fixed" w="100%" backdropFilter="blur(10px)">
			<Navbar.Nav>
				<Navbar.Logo />
				<Navbar.Menu />
				<Navbar.ThemeToggle />
			</Navbar.Nav>
		</Box>
	);
}
