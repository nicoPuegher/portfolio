import React from 'react';

import { Box } from '@chakra-ui/react';

export default function Nav({ children }) {
	return (
		<Box
			as="nav"
			maxW="container.md"
			p="2"
			mx="auto"
			display="flex"
			wrap="wrap"
			justifyContent="space-between"
			alignItems="center"
		>
			{children}
		</Box>
	);
}
