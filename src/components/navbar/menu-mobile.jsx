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
import { light, dark } from '@/lib/colors';

export default function MenuMobile() {
	const context = useContext(Context);

	return (
		<Menu>
			<MenuButton
				as={IconButton}
				icon={<HamburgerIcon />}
				aria-label="Options"
				display={{ base: 'block', lg: 'none' }}
				color={useColorModeValue(
					light.text_light_content,
					dark.text_light_content,
				)}
				bg={useColorModeValue(light.neutral, dark.neutral)}
				_hover={{
					bg: useColorModeValue(
						light.neutral_hover,
						dark.neutral_hover,
					),
				}}
				_active={{
					bg: useColorModeValue(
						light.neutral_hover,
						dark.neutral_hover,
					),
				}}
			/>
			<MenuList bg={useColorModeValue(light.bg_light, dark.bg_dark)}>
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
