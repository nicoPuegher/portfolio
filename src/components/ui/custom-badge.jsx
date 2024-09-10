import React from 'react';
import { useColorModeValue, Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

export default function CustomBadge({ text, ...props }) {
	return (
		<Badge
			colorScheme={useColorModeValue(light.secondary, dark.secondary)}
			{...props}
		>
			{text}
		</Badge>
	);
}
CustomBadge.propTypes = {
	text: PropTypes.string.isRequired,
};
