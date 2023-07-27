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
      bg: mode('whiteAlpha.900', 'blackAlpha.800')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        color: 'purple',
      },
    },
  },

  Link: {
    baseStyle: props => ({
      color: mode('blue', 'pink')(props),
      textUnderLineOffset: 3,
    }),
  },
};

const theme = extendTheme({ config, fonts, styles, components });

export default theme;
