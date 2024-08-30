import React from 'react';
import { AspectRatio, Image, Center, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import CustomGrid from '@/components/ui/custom-grid';

export default function ProjectImages({
	preview,
	mobilePreview1,
	mobilePreview2,
	fallback,
}) {
	return (
		<CustomGrid
			w="full"
			templateRows="repeat(2, auto)"
			templateColumns="repeat(2, 1fr)"
		>
			<GridItem w="full" colSpan={2}>
				<AspectRatio borderRadius="md" shadow="xs" ratio={16 / 10}>
					<Image src={preview} borderRadius="md" />
				</AspectRatio>
			</GridItem>
			<GridItem w="full">
				<AspectRatio borderRadius="md" shadow="xs" ratio={9 / 16}>
					<Image
						borderRadius="md"
						src={mobilePreview1}
						fallback={<Center>{fallback}</Center>}
					/>
				</AspectRatio>
			</GridItem>
			<GridItem w="full">
				<AspectRatio borderRadius="md" shadow="xs" ratio={9 / 16}>
					<Image
						borderRadius="md"
						src={mobilePreview2}
						fallback={<Center>{fallback}</Center>}
					/>
				</AspectRatio>
			</GridItem>
		</CustomGrid>
	);
}
ProjectImages.propTypes = {
	preview: PropTypes.string.isRequired,
	mobilePreview1: PropTypes.string.isRequired,
	mobilePreview2: PropTypes.string.isRequired,
	fallback: PropTypes.string.isRequired,
};
