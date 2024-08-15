import React from 'react';
import { Text } from '@chakra-ui/react';

import LayoutContainer from '@/components/ui/layout-container';

export default function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear();
	const copyright = `© ${currentYear} - All rights reserved.`;

	return (
		<LayoutContainer as="footer" bg="black">
			<Text fontSize="sm" textAlign="center" color="white">
				{copyright}
			</Text>
		</LayoutContainer>
	);
}
