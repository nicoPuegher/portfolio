import React from 'react';
import { useColorModeValue, Divider } from '@chakra-ui/react';

import { light, dark } from '@/lib/colors';

export default function CustomDivider() {
	return (
		<Divider
			width="half"
			borderColor={useColorModeValue(light.divider, '')}
		/>
	);
}
