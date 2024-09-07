import React from 'react';
import { useColorModeValue, Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

export default function CustomBadge({ text }) {
	return (
		<Badge colorScheme={useColorModeValue(light.primary, '')}>{text}</Badge>
	);
}
CustomBadge.propTypes = {
	text: PropTypes.string.isRequired,
};
