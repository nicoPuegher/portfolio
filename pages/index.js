import {
  Container,
  Box,
  Image,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box mb={4} textAlign="center">
        <Box
          w="125px"
          h="125px"
          display="inline-block"
          borderStyle="solid"
          borderWidth={2}
          borderRadius="full"
          borderColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.800')}
          overflow="hidden"
        >
          <Image
            src="/images/nicolas.jpg"
            alt="Profile image"
            width="125"
            height="125"
            borderRadius="full"
          />
        </Box>
      </Box>

      <Box
        p={3}
        mb={4}
        align="center"
        borderRadius="lg"
        bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
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
