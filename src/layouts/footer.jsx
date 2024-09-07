import React from 'react';
import { useColorModeValue, Text } from '@chakra-ui/react';

import CustomContainer from '@/components/ui/custom-container';
import { light, dark } from '@/lib/colors';

export default function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear().toString();

	return (
		<CustomContainer
			as="footer"
			color={useColorModeValue(light.textLight, '')}
			bg={useColorModeValue(light.bgDark, '')}
		>
			<Text fontSize="sm" textAlign="center">
				© <time dateTime={currentYear}>{currentYear}</time> - All
				rights reserved.
			</Text>
		</CustomContainer>
	);
}
