import NextLink from 'next/link';
import { Box, Text, LinkBox, Image } from '@chakra-ui/react';

const GridItem = ({ id, title, thumbnail, description }) => {
  return (
    <Box>
      <LinkBox as={NextLink} href={`/works/${id}`}>
        <Image src={thumbnail.src} alt={title} borderRadius="md" />
        <Box mt={1} align="center">
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text>{description}</Text>
        </Box>
      </LinkBox>
    </Box>
  );
};

export default GridItem;
