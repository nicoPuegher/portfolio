import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
      colorScheme={useColorModeValue('purple', 'green')}
      aria-label="Toggle theme"
    />
  );
};

export default ThemeToggle;
