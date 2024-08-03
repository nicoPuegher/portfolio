import React from 'react';
import { Box, AspectRatio, Image, Center, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function GridItem({ title, description, src, fallback }) {
	return (
		<Box>
			<AspectRatio
				maxH="405.375px"
				mb={5}
				borderRadius="md"
				ratio={128 / 69}
				shadow="xs"
			>
				<Image
					borderRadius="md"
					src={src}
					alt={title}
					fallback={<Center>{fallback}</Center>}
				/>
			</AspectRatio>
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
