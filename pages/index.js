import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';

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

const Message = () => (
  <Box
    p={3}
    mb={6}
    align="center"
    borderRadius="lg"
    bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
  >
    Hey there, nice to meet you!
  </Box>
);

const Info = () => (
  <Box flexGrow={1} align="center">
    <Heading as="h2">Nicolas Puegher</Heading>
    <p>Frontend Developer</p>
  </Box>
);

const PortfolioButton = () => (
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
);

const Home = () => (
  <Section delay={0.1}>
    <Container>
      <Profile />
      <Message />
      <Box>
        <Info />
        <PortfolioButton />
      </Box>
    </Container>
  </Section>
);

export default Home;
