import React from 'react';

import { Box, Heading } from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function Section({ title, children }) {
	return (
		<Box as="section" textAlign="center">
			<Heading as="h2" size="md" mb={3}>
				{title}
			</Heading>
			{children}
		</Box>
	);
}
Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
