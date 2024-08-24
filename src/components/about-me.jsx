import React from 'react';
import { Text } from '@chakra-ui/react';

import developer from '@/constants/developer';

import CustomGrid from './ui/custom-grid';

export default function AboutMe() {
	return (
		<CustomGrid>
			<Text>{developer.summary['1']}</Text>
			<Text>{developer.summary['2']}</Text>
			<Text>{developer.summary['3']}</Text>
		</CustomGrid>
	);
}
