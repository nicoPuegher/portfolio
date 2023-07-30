import NextLink from 'next/link';
import { Box, Text, LinkBox, Image, useColorModeValue } from '@chakra-ui/react';

const GridImage = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    borderRadius="md"
    shadow={useColorModeValue('xs', '')}
  />
);

const GridInfo = ({ title, description }) => (
  <Box mt={1} align="center">
    <Text fontSize="lg" fontWeight="bold">
      {title}
    </Text>
    <Text
      color={useColorModeValue(
        'RGBA(0, 0, 0, 0.64)',
        'RGBA(255, 255, 255, 0.80)',
      )}
    >
      {description}
    </Text>
  </Box>
);

const GridItem = ({ id, title, thumbnail: { src }, description }) => (
  <Box>
    <LinkBox as={NextLink} href={`/works/${id}`}>
      <GridImage src={src} alt={title} />
      <GridInfo title={title} description={description} />
    </LinkBox>
  </Box>
);

export default GridItem;
