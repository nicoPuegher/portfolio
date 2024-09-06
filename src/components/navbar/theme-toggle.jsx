import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import colors from '@/lib/colors';

export default function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();

	const moon = (
		<MoonIcon color={useColorModeValue(colors.black, colors.white)} />
	);
	const sun = (
		<SunIcon color={useColorModeValue(colors.black, colors.white)} />
	);

	return (
		<IconButton
			icon={colorMode === 'light' ? moon : sun}
			colorScheme={useColorModeValue(
				colors.lightAction,
				colors.darkAction,
			)}
			onClick={toggleColorMode}
		/>
	);
}
