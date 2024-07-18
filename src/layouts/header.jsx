import React from 'react';

import { Box } from '@chakra-ui/react';

import Nav from '@layouts/navbar/nav';
import Logo from '@layouts/navbar/logo';
import Menu from '@layouts/navbar/menu';
import Theme from '@layouts/navbar/theme-toggle';

export default function Header() {
	return (
		<Box as="header" pos="fixed" w="100%" backdropFilter="blur(10px)">
			<Nav>
				<Logo />
				<Menu />
				<Theme />
			</Nav>
		</Box>
	);
}
