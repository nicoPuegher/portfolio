import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const CustomHeading = () => (
  <Heading as="h1" mb={2}>
    Not Found
  </Heading>
);

const BackHomeButton = () => (
  <Box mt={6}>
    <Button
      as={NextLink}
      href="/"
      rightIcon={<ChevronRightIcon />}
      colorScheme={useColorModeValue('purple', 'green')}
    >
      Return to home
    </Button>
  </Box>
);

const NotFound = () => (
  <Container align="center">
    <CustomHeading />
    <Text>This page does not exist.</Text>
    <BackHomeButton />
  </Container>
);

export default NotFound;
