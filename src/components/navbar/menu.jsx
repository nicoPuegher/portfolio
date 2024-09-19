import React, { useContext } from 'react';
import { useColorModeValue, ButtonGroup, Link } from '@chakra-ui/react';

import Context from '@/store/context';
import CustomFlex from '@/components/ui/custom-flex';
import CustomButton from '@/components/ui/custom-button';
import menu from '@/constants/menu';
import { light, dark } from '@/lib/colors';

export default function Menu() {
	const context = useContext(Context);

	const buttonColor = useColorModeValue(
		light.text_light_content,
		dark.text_dark_content,
	);
	const buttonBg = useColorModeValue(light.neutral, dark.neutral);

	return (
		<ButtonGroup display={{ base: 'none', lg: 'flex' }}>
			<CustomFlex align="center">
				{menu.buttons.map((name) => (
					<CustomButton
						key={name}
						variant="ghost"
						text={name}
						color={buttonColor}
						_hover={{ bg: buttonBg }}
						onClick={() =>
							context.handleChangePage(name.toLowerCase())
						}
					/>
				))}

				{menu.links.map((link) => (
					<Link key={link.name} href={link.url}>
						<CustomButton
							variant="ghost"
							text={link.name}
							color={buttonColor}
							_hover={{ bg: buttonBg }}
						/>
					</Link>
				))}
			</CustomFlex>
		</ButtonGroup>
	);
}
