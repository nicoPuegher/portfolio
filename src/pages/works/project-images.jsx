import React from 'react';
import { AspectRatio, Image, Center, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import CustomGrid from '@/components/ui/custom-grid';

export default function ProjectImages({
	previewImage,
	mobilePreview1,
	mobilePreview2,
	imageFallback,
}) {
	return (
		<CustomGrid
			w="full"
			templateRows="repeat(2, auto)"
			templateColumns="repeat(2, 1fr)"
		>
			<GridItem w="full" colSpan={2}>
				<AspectRatio borderRadius="md" shadow="xs" ratio={16 / 10}>
					<Image
						src={previewImage}
						borderRadius="md"
						fallback={<Center>{imageFallback}</Center>}
					/>
				</AspectRatio>
			</GridItem>
			<GridItem w="full">
				<AspectRatio borderRadius="md" shadow="xs" ratio={9 / 16}>
					<Image
						src={mobilePreview1}
						borderRadius="md"
						fallback={<Center>{imageFallback}</Center>}
					/>
				</AspectRatio>
			</GridItem>
			<GridItem w="full">
				<AspectRatio borderRadius="md" shadow="xs" ratio={9 / 16}>
					<Image
						src={mobilePreview2}
						borderRadius="md"
						fallback={<Center>{imageFallback}</Center>}
					/>
				</AspectRatio>
			</GridItem>
		</CustomGrid>
	);
}
ProjectImages.propTypes = {
	previewImage: PropTypes.string.isRequired,
	mobilePreview1: PropTypes.string.isRequired,
	mobilePreview2: PropTypes.string.isRequired,
	imageFallback: PropTypes.string.isRequired,
};
