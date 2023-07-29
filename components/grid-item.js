import NextLink from 'next/link';
import { Box, Text, LinkBox, Image } from '@chakra-ui/react';

const GridImage = ({ src, alt }) => (
  <Image src={src} alt={alt} borderRadius="md" />
);

const GridInfo = ({ title, description }) => (
  <Box mt={1} align="center">
    <Text fontSize="lg" fontWeight="bold">
      {title}
    </Text>
    <Text>{description}</Text>
  </Box>
);

const GridItem = ({ id, title, thumbnail: { src }, description }) => {
  return (
    <Box>
      <LinkBox as={NextLink} href={`/works/${id}`}>
        <GridImage src={src} alt={title} />
        <GridInfo title={title} description={description} />
      </LinkBox>
    </Box>
  );
};

export default GridItem;
