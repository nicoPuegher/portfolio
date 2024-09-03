import React from 'react';
import { Box } from '@chakra-ui/react';

import Nav from '@components/navbar/nav';
import Logo from '@components/navbar/logo';
import CustomFlex from '@/components/ui/custom-flex';
import ThemeToggle from '@components/navbar/theme-toggle';
import MenuMobile from '@components/navbar/menu-mobile';

export default function Header() {
	return (
		<Box as="header" pos="sticky" top={0} bg="black" zIndex="sticky">
			<Nav>
				<Logo />
				<CustomFlex>
					<ThemeToggle />
					<MenuMobile />
				</CustomFlex>
			</Nav>
		</Box>
	);
}
