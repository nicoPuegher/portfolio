import React from 'react';

import { Box, Heading } from '@chakra-ui/react';

import developer from '@/constants';

export default function Myself() {
	return (
		<Box>
			<Heading as="h2" size="lg">
				{developer.name}
			</Heading>
			<span>{developer.role}</span>
		</Box>
	);
}
