import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Nav({ children }) {
	return (
		<Box
			as="nav"
			maxW="container.md"
			p={2}
			mx="auto"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			wrap="wrap"
		>
			{children}
		</Box>
	);
}
Nav.propTypes = {
	children: PropTypes.node.isRequired,
};
