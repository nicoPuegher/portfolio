import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="black" p={3} mb={4} align="center">
        Hey there, nice to meet you!
      </Box>

      <Box>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nicolas Puegher
          </Heading>
          <p>Frontend Developer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
