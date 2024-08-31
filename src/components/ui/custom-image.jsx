import React from 'react';
import { Image, Center } from '@chakra-ui/react';

export default function CustomImage({ src, alt }) {
	return (
		<Image
			src={src}
			alt={alt}
			fallback={<Center>Loading image...</Center>}
			borderRadius="md"
		/>
	);
}
