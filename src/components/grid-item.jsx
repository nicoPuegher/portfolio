import React from 'react';
import { AspectRatio, Image, Center, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import CustomSection from './ui/custom-section';
import CustomButton from './ui/custom-button';

export default function GridItem({
	name,
	type,
	description,
	previewImage,
	imageFallback,
	goToPage,
}) {
	return (
		<>
			<AspectRatio w="full" borderRadius="md" shadow="xs" ratio={16 / 10}>
				<Image
					src={previewImage}
					alt={name}
					fallback={<Center>{imageFallback}</Center>}
					borderRadius="md"
				/>
			</AspectRatio>
			<CustomSection customVariant="h3" title={type}>
				<Text>{description}</Text>
			</CustomSection>
			<CustomButton
				call="action"
				text="View details"
				onClick={goToPage}
			/>
		</>
	);
}
GridItem.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	previewImage: PropTypes.string.isRequired,
	imageFallback: PropTypes.string.isRequired,
	goToPage: PropTypes.func.isRequired,
};
