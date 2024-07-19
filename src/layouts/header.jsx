import React from 'react';

import { Box } from '@chakra-ui/react';

import * as Navbar from '@layouts/navbar';

export default function Header() {
	return (
		<Box
			as="header"
			pos="sticky"
			w="100%"
			top="0"
			backdropFilter="blur(10px)"
		>
			<Navbar.Nav>
				<Navbar.Logo />
				<Navbar.Menu />
				<Box>
					<Navbar.ThemeToggle />
					<Navbar.MenuMobile />
				</Box>
			</Navbar.Nav>
		</Box>
	);
}
