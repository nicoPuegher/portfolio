import React from 'react';
import { useColorModeValue, Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { dark } from '@/lib/colors';

export default function CustomBadge({ text }) {
	return (
		<Badge
			color={useColorModeValue(dark.black, '')}
			colorScheme={useColorModeValue(dark.active, '')}
		>
			{text}
		</Badge>
	);
}
CustomBadge.propTypes = {
	text: PropTypes.string.isRequired,
};
