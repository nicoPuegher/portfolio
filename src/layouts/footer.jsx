import React from 'react';
import { Text } from '@chakra-ui/react';

import CustomContainer from '@/components/ui/custom-container';

export default function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear().toString();

	return (
		<CustomContainer as="footer" bg="black">
			<Text fontSize="sm" textAlign="center" color="white">
				© <time dateTime={currentYear}>{currentYear}</time> - All
				rights reserved.
			</Text>
		</CustomContainer>
	);
}
