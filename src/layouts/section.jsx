import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Section({ mb = 0, title, children }) {
	return (
		<Box as="section" mb={mb} textAlign="center">
			<Heading as="h2" size="md" mb={3}>
				{title}
			</Heading>
			{children}
		</Box>
	);
}
Section.propTypes = {
	mb: PropTypes.number,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
