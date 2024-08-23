import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomSection({ title, children }) {
	return (
		<Box as="section" textAlign="center">
			<Heading as="h2" size="lg" mb={1}>
				{title}
			</Heading>
			{children}
		</Box>
	);
}
CustomSection.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
