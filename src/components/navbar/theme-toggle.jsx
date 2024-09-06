import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { dark } from '@/lib/colors';

export default function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();

	const moon = <MoonIcon color={useColorModeValue(dark.black, '')} />;
	const sun = <SunIcon color={useColorModeValue(dark.black, '')} />;

	return (
		<IconButton
			icon={colorMode === 'light' ? moon : sun}
			colorScheme={useColorModeValue(dark.active, '')}
			onClick={toggleColorMode}
		/>
	);
}
