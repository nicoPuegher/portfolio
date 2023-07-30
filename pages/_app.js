import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/fonts';
import Layout from '../layouts/main';
import theme from '../lib/theme';

const Website = ({ Component, pageProps, router }) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
);

export default Website;
