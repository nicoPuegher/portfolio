import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function Message({ children }) {
	return (
		<Box
			w="full"
			p={2}
			borderRadius="md"
			color="white"
			backgroundColor="black"
		>
			<Text textAlign="center">{children}</Text>
		</Box>
	);
}

Message.propTypes = {
	children: PropTypes.node.isRequired,
};
