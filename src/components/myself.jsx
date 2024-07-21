import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';

import developer from '@/constants';

export default function Myself() {
	return (
		<Box textAlign="center">
			<Heading as="h2" size="lg">
				{developer.name}
			</Heading>
			<Text as="span">{developer.role}</Text>
		</Box>
	);
}
