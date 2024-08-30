import React from 'react';
import { AspectRatio, Image, Center, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import ButtonCall from '@components/ui/button-call';

import CustomSection from './ui/custom-section';

export default function GridItem({
	title,
	description,
	src,
	fallback,
	goToPage,
}) {
	return (
		<>
			<AspectRatio w="full" borderRadius="md" shadow="xs" ratio={16 / 10}>
				<Image
					src={src}
					alt={title}
					fallback={<Center>{fallback}</Center>}
					borderRadius="md"
				/>
			</AspectRatio>
			<CustomSection customVariant="h3" title={title}>
				<Text>{description}</Text>
			</CustomSection>
			<ButtonCall text="View details" goToPage={goToPage} />
		</>
	);
}
GridItem.propTypes = {
	title: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	fallback: PropTypes.string.isRequired,
	goToPage: PropTypes.func.isRequired,
};
