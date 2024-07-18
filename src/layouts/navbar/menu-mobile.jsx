import React from 'react';

import {
	Box,
	Menu,
	MenuButton,
	IconButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

export default function MenuMobile() {
	return (
		<Box ml="2" display={{ base: 'inline-block', md: 'none' }}>
			<Menu>
				<MenuButton
					as={IconButton}
					icon={<HamburgerIcon />}
					variant="outline"
					aria-label="Options"
				/>
				<MenuList>
					<MenuItem>About</MenuItem>
					<MenuItem>Works</MenuItem>
					<MenuItem>Linkedin</MenuItem>
					<MenuItem>Github</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
}
