import NextLink from 'next/link';
import {
  Box,
  Heading,
  Link,
  Badge,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const WorkTitle = ({ children }) => {
  return (
    <Box>
      <Link as={NextLink} href="/works" variant="external-link">
        Works
      </Link>
      <ChevronRightIcon mx={1} />
      <Heading as="h3" fontSize={20} display="inline-block" mb={6}>
        {children}
      </Heading>
    </Box>
  );
};

const WorkBadge = ({ children }) => {
  return (
    <Badge mr={2} colorScheme={useColorModeValue('teal', 'blue')}>
      {children}
    </Badge>
  );
};

const StackBadge = ({ children }) => {
  return <Badge>{children}</Badge>;
};

const WorkImage = ({ image, alt }) => {
  return (
    <Image
      src={image.src}
      alt={alt}
      borderRadius="md"
      shadow={useColorModeValue('xs', '')}
    />
  );
};

export { WorkTitle, WorkBadge, StackBadge, WorkImage };
