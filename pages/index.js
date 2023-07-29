import {
  Container,
  Box,
  useColorModeValue,
  Image,
  Heading,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Profile = () => (
  <Box mb={6} textAlign="center">
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
);

const Home = () => {
  return (
    <Container>
      <Profile />

      <Box
        p={3}
        mb={6}
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
        <Box align="center" mt={6}>
          <Button
            as={NextLink}
            href="/works"
            rightIcon={<ChevronRightIcon />}
            colorScheme={useColorModeValue('purple', 'green')}
          >
            Portfolio
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
