import React from 'react';
import {
	Box,
	AspectRatio,
	Image,
	Center,
	Heading,
	Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import ButtonCall from '@components/ui/button-call';

export default function GridItem({
	title,
	description,
	src,
	fallback,
	goToPage,
}) {
	return (
		<Box>
			<AspectRatio mb={5} borderRadius="md" shadow="xs" ratio={16 / 10}>
				<Image
					borderRadius="md"
					src={src}
					alt={title}
					fallback={<Center>{fallback}</Center>}
				/>
			</AspectRatio>
			<CustomSection customVariant="h3" title={title}>
				<Text>{description}</Text>
			</CustomSection>
			<ButtonCall text="View details" goToPage={goToPage} />
		</Box>
	);
}
GridItem.propTypes = {
	title: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	fallback: PropTypes.string.isRequired,
	goToPage: PropTypes.func.isRequired,
};
