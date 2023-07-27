import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nicolas Puegher - Portfolio</title>
      </Head>

      <Container maxW="container.md" pt={24}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
