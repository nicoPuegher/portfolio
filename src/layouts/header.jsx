import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

import Nav from '@components/navbar/nav';
import Logo from '@components/navbar/logo';
import CustomFlex from '@/components/ui/custom-flex';
import ThemeToggle from '@components/navbar/theme-toggle';
import MenuMobile from '@components/navbar/menu-mobile';
import Menu from '@/components/navbar/menu';
import { light, dark } from '@/lib/colors';

export default function Header() {
	return (
		<Box
			as="header"
			pos="sticky"
			top={0}
			bg={useColorModeValue(light.bg_dark, dark.bgLight)}
			zIndex="sticky"
		>
			<Nav>
				<Logo />
				<Menu />
				<CustomFlex>
					<ThemeToggle />
					<MenuMobile />
				</CustomFlex>
			</Nav>
		</Box>
	);
}
