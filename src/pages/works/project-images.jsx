import React from 'react';
import { GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import CustomGrid from '@/components/ui/custom-grid';
import CustomImage from '@/components/ui/custom-image';

export default function ProjectImages({
	previewImage,
	mobilePreview1,
	mobilePreview2,
}) {
	const imagesArray = [previewImage, mobilePreview1, mobilePreview2];

	const images = imagesArray.map((src, index) => (
		<GridItem key={src} w="full" colSpan={index === 0 ? 2 : 1}>
			<CustomImage src={src} ratio={index === 0 ? 'desktop' : 'mobile'} />
		</GridItem>
	));

	return (
		<CustomGrid
			w="full"
			templateRows="repeat(2, auto)"
			templateColumns="repeat(2, 1fr)"
		>
			{images}
		</CustomGrid>
	);
}
ProjectImages.propTypes = {
	previewImage: PropTypes.string.isRequired,
	mobilePreview1: PropTypes.string.isRequired,
	mobilePreview2: PropTypes.string.isRequired,
};
