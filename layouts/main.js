import Head from 'next/head';
import { Container, Box } from '@chakra-ui/react';
import Navbar from '../components/navbar';

const Main = ({ children, router }) => (
  <Box as="main">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Nicolas Puegher - Portfolio</title>
    </Head>
    <Navbar path={router.asPath} />
    <Container maxW="container.md" pt={24} pb="calc(96px - 56px)">
      {children}
    </Container>
  </Box>
);

export default Main;
