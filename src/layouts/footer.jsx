import React from 'react';
import { Text } from '@chakra-ui/react';

import LayoutWrapper from '@/components/ui/layout-wrapper';

export default function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear().toString();

	return (
		<LayoutWrapper as="footer" bg="black">
			<Text fontSize="sm" textAlign="center" color="white">
				© <time dateTime={currentYear}>{currentYear}</time> - All
				rights reserved.
			</Text>
		</LayoutWrapper>
	);
}
