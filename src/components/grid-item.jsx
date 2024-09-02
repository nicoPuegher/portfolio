import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import CustomImage from './ui/custom-image';
import CustomSection from './ui/custom-section';
import CustomButton from './ui/custom-button';

export default function CustomGridItem({
	name,
	type,
	description,
	previewImage,
	goToPage,
}) {
	return (
		<>
			<CustomImage src={previewImage} alt={name} />
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
CustomGridItem.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	previewImage: PropTypes.string.isRequired,
	goToPage: PropTypes.func.isRequired,
};
