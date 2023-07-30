import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/fonts';
import Layout from '../layouts/main';
import { AnimatePresence } from 'framer-motion';
import theme from '../lib/theme';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const Website = ({ Component, pageProps, router }) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Layout router={router}>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  </ChakraProvider>
);

export default Website;
