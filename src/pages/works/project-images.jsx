import React from 'react';
import { Image, SimpleGrid } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function ProjectImages({
	preview,
	mobilePreview1,
	mobilePreview2,
}) {
	return (
		<>
			<Image src={preview} borderRadius="md" />
			<SimpleGrid columns={2} mt={3} gap={3}>
				<AspectRatio borderRadius="md" shadow="xs" ratio={9 / 16}>
					<Image
						borderRadius="md"
						src={mobilePreview1}
						alt={alt}
						fallback={<Center>{fallback}</Center>}
					/>
				</AspectRatio>
				<AspectRatio borderRadius="md" shadow="xs" ratio={9 / 16}>
					<Image
						borderRadius="md"
						src={mobilePreview2}
						alt={alt}
						fallback={<Center>{fallback}</Center>}
					/>
				</AspectRatio>
			</SimpleGrid>
		</>
	);
}
ProjectImages.propTypes = {
	preview: PropTypes.string.isRequired,
	mobilePreview1: PropTypes.string.isRequired,
	mobilePreview2: PropTypes.string.isRequired,
};
