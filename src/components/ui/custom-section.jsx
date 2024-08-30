import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomSection({
	customVariant = 'h2',
	title,
	children,
}) {
	const as = customVariant === 'h2' ? 'h2' : 'h3';
	const size = customVariant === 'h2' ? 'lg' : 'md';

	return (
		<Box as="section" textAlign="center">
			<Heading as={as} size={size} mb={1}>
				{title}
			</Heading>
			{children}
		</Box>
	);
}
CustomSection.propTypes = {
	customVariant: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
