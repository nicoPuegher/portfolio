import React, { useContext } from 'react';
import {
	Box,
	Menu,
	MenuButton,
	IconButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import Context from '@/store/context';

export default function MenuMobile() {
	const context = useContext(Context);

	return (
		<Box ml={2} display="inline-block">
			<Menu>
				<MenuButton
					as={IconButton}
					icon={<HamburgerIcon />}
					aria-label="Options"
				/>
				<MenuList>
					<MenuItem
						letterSpacing="inherit"
						onClick={() => context.handleChangePage('about')}
					>
						About
					</MenuItem>
					<MenuItem
						letterSpacing="inherit"
						onClick={() => context.handleChangePage('works')}
					>
						Works
					</MenuItem>
					<MenuItem letterSpacing="inherit">Linkedin</MenuItem>
					<MenuItem letterSpacing="inherit">Github</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
}
