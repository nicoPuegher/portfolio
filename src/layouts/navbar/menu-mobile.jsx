import React, { useContext } from 'react';

import Context from '@/store/context';

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
	const context = useContext(Context);

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
					<MenuItem onClick={() => context.handleChangePage('about')}>
						About
					</MenuItem>
					<MenuItem onClick={() => context.handleChangePage('works')}>
						Works
					</MenuItem>
					<MenuItem>Linkedin</MenuItem>
					<MenuItem>Github</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
}
