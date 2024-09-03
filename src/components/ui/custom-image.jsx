import React from 'react';
import { AspectRatio, Image, Center } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomImage({
	src,
	alt = 'Application preview',
	ratio = 'desktop',
}) {
	const customRatio = ratio === 'desktop' ? 16 / 10 : 9 / 16;

	return (
		<AspectRatio w="full" borderRadius="md" shadow="xs" ratio={customRatio}>
			<Image
				src={src}
				alt={alt}
				fallback={<Center>Loading image...</Center>}
				borderRadius="md"
			/>
		</AspectRatio>
	);
}
CustomImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	ratio: PropTypes.string,
};
