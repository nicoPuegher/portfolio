import React from 'react';
import { Box, Image, Center, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function GridItem({ title, description, src, fallback }) {
	return (
		<Box>
			<Image
				borderRadius="md"
				src={src}
				alt={title}
				fallback={<Center>{fallback}</Center>}
			/>
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
	fallback: PropTypes.string.isRequired,
};
