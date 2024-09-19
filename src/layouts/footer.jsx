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
			minW="full"
			color={useColorModeValue(
				light.text_light_content,
				dark.text_dark_content,
			)}
			bg={useColorModeValue(light.bg_dark, dark.bg_light)}
		>
			<Text fontSize="sm" textAlign="center">
				© <time dateTime={currentYear}>{currentYear}</time> - All
				rights reserved.
			</Text>
		</CustomContainer>
	);
}
