import React from 'react';
import { Box } from '@chakra-ui/react';

import * as Navbar from '@components/navbar';
import CustomFlex from '@/components/ui/custom-flex';

export default function Header() {
	return (
		<Box as="header" pos="sticky" top={0} bg="black" zIndex="sticky">
			<Navbar.Nav>
				<Navbar.Logo />
				<CustomFlex>
					<Navbar.ThemeToggle />
					<Navbar.MenuMobile />
				</CustomFlex>
			</Navbar.Nav>
		</Box>
	);
}
