import React from 'react';
import { useColorModeValue, Divider } from '@chakra-ui/react';

import { dark } from '@/lib/colors';

export default function CustomDivider() {
	return (
		<Divider
			width="half"
			borderColor={useColorModeValue(dark.grayBorder, '')}
		/>
	);
}
