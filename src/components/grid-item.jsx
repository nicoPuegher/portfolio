import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function GridItem({ title, description, src }) {
	return (
		<Box>
			<Image src={src} alt={title} borderRadius="md" shadow="xs" />
			<Box>
				<Text>{title}</Text>
				<Text>{description}</Text>
			</Box>
		</Box>
	);
}
GridItem.propTypes = {
	title: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
