import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const styles = {
  global: props => ({
    body: {
      color: mode('blackAlpha.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'black')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': props => ({
        fontSize: '3xl',
        marginBottom: 2,
      }),
    },
  },

  Link: {
    variants: {
      'external-link': props => ({
        color: mode('purple.500', 'green.200')(props),
      }),
    },
  },
};

const theme = extendTheme({ config, fonts, styles, components });

export default theme;
