import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import CustomImage from './custom-image';
import CustomSection from './custom-section';
import CustomActiveButton from './custom-active-button';

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
			<CustomSection customVariant="h3" title={type} mb={2}>
				<Text>{description}</Text>
			</CustomSection>
			<CustomActiveButton text="View details" onClick={goToPage} />
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
