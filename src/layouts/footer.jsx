import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear();
	const copyright = `© ${currentYear} Nicolas Puegher - All rights reserved.`;

	return (
		<Box as="footer" py={2} color="white" backgroundColor="black">
			<Text textAlign="center">{copyright}</Text>
		</Box>
	);
}
