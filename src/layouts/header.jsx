import React from 'react';
import { Box } from '@chakra-ui/react';

import * as Navbar from '@components/navbar';

export default function Header() {
	return (
		<Box as="header" pos="sticky" top={0} bg="black" zIndex="sticky">
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
