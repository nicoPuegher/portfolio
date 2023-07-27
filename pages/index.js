import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box
        p={3}
        mb={4}
        align="center"
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.900')}
      >
        Hey there, nice to meet you!
      </Box>

      <Box>
        <Box flexGrow={1} align="center">
          <Heading as="h2">Nicolas Puegher</Heading>
          <p>Frontend Developer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
