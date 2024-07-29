import React from 'react';
import { Grid, Text } from '@chakra-ui/react';

import developer from '@/constants';

export default function AboutMe() {
	return (
		<Grid gap={5}>
			<Text>{developer.summary['1']}</Text>
			<Text>{developer.summary['2']}</Text>
			<Text>{developer.summary['3']}</Text>
		</Grid>
	);
}
