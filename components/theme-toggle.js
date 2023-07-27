import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
      bg={useColorModeValue('purple.400', 'blue.400')}
      _hover={{
        backgroundColor: useColorModeValue('purple.500', 'blue.500'),
      }}
      color={useColorModeValue('purple.50', 'blue.900')}
      aria-label="Toggle theme"
    />
  );
};

export default ThemeToggle;
