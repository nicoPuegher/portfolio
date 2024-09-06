import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			onClick={toggleColorMode}
		/>
	);
}
