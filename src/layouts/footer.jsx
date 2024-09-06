import React from 'react';
import { useColorModeValue, Text } from '@chakra-ui/react';

import CustomContainer from '@/components/ui/custom-container';
import { dark } from '@/lib/colors';

export default function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear().toString();

	return (
		<CustomContainer
			as="footer"
			color={useColorModeValue(dark.white, '')}
			bg={useColorModeValue(dark.black, '')}
		>
			<Text fontSize="sm" textAlign="center">
				© <time dateTime={currentYear}>{currentYear}</time> - All
				rights reserved.
			</Text>
		</CustomContainer>
	);
}
