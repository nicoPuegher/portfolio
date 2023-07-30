import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 15, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          colorScheme={useColorModeValue('purple', 'green')}
          aria-label="Toggle theme"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggle;
