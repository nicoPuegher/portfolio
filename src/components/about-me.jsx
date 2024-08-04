import React from 'react';
import { Text } from '@chakra-ui/react';

import developer from '@/constants/developer';

export default function AboutMe() {
	return (
		<>
			<Text mb={5}>{developer.summary['1']}</Text>
			<Text mb={5}>{developer.summary['2']}</Text>
			<Text>{developer.summary['3']}</Text>
		</>
	);
}
