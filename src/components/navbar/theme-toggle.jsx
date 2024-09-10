import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { light, dark } from '@/lib/colors';

export default function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();

	const moon = <MoonIcon />;
	const sun = <SunIcon />;

	return (
		<IconButton
			icon={colorMode === 'light' ? moon : sun}
			colorScheme={useColorModeValue(light.primary, dark.primary)}
			onClick={toggleColorMode}
		/>
	);
}
