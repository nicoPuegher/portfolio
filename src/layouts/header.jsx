import React from 'react';
import { Box } from '@chakra-ui/react';

import * as Navbar from '@components/navbar';
import InlineWrapper from '@/components/ui/inline-wrapper';

export default function Header() {
	return (
		<Box as="header" pos="sticky" top={0} bg="black" zIndex="sticky">
			<Navbar.Nav>
				<Navbar.Logo />
				<InlineWrapper>
					<Navbar.ThemeToggle />
					<Navbar.MenuMobile />
				</InlineWrapper>
			</Navbar.Nav>
		</Box>
	);
}
