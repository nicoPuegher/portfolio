import React, { useContext } from 'react';
import {
	useColorModeValue,
	Menu,
	MenuButton,
	IconButton,
	MenuList,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import Context from '@/store/context';
import CustomMenuItem from '@/components/ui/custom-menu-item';
import CustomLink from '@/components/ui/custom-link';
import menu from '@/constants/menu';
import colors from '@/lib/colors';

export default function MenuMobile() {
	const context = useContext(Context);

	return (
		<Menu>
			<MenuButton
				as={IconButton}
				icon={<HamburgerIcon />}
				aria-label="Options"
				color={useColorModeValue(colors.black, colors.white)}
				colorScheme={useColorModeValue(
					colors.lightAction,
					colors.darkAction,
				)}
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
						<CustomLink url={link.url} text={link.name} />
					</CustomMenuItem>
				))}
			</MenuList>
		</Menu>
	);
}
