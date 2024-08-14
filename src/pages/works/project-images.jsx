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
				<Image src={mobilePreview1} borderRadius="md" />
				<Image src={mobilePreview2} borderRadius="md" />
			</SimpleGrid>
		</>
	);
}
ProjectImages.propTypes = {
	preview: PropTypes.string.isRequired,
	mobilePreview1: PropTypes.string.isRequired,
	mobilePreview2: PropTypes.string.isRequired,
};
