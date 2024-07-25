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
