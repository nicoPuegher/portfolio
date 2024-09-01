import React from 'react';
import { Image, Center } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomImage({ src, alt = 'Application preview' }) {
	return (
		<Image
			src={src}
			alt={alt}
			fallback={<Center>Loading image...</Center>}
			borderRadius="md"
		/>
	);
}
CustomImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
};
