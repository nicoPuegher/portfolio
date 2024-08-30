import React, { useContext } from 'react';
import { Menu, MenuButton, IconButton, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import Context from '@/store/context';
import CustomMenuItem from '@/components/ui/custom-menu-item';
import CustomLink from '@/components/ui/custom-link';
import menu from '@/constants/menu';

export default function MenuMobile() {
	const context = useContext(Context);

	return (
		<Menu>
			<MenuButton
				as={IconButton}
				icon={<HamburgerIcon />}
				aria-label="Options"
			/>
			<MenuList>
				{menu.buttons.map((name) => (
					<CustomMenuItem
						key={name}
						onClick={() =>
							context.handleChangePage(name.toLowerCase())
						}
					>
						{name}
					</CustomMenuItem>
				))}
				{menu.links.map((link) => (
					<CustomMenuItem key={link.name}>
						<CustomLink url={link.url}>{link.name}</CustomLink>
					</CustomMenuItem>
				))}
			</MenuList>
		</Menu>
	);
}
