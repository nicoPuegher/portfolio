import { Box, LinkBox, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const GridItem = ({ id, title, thumbnail, description }) => {
  return (
    <Box>
      <LinkBox as={NextLink} href={`/works/${id}`}>
        <Image src={thumbnail.src} alt={title} borderRadius="md" />
        <Box align="center">
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
