import React from 'react';
import { useColorModeValue, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

export default function CustomButton({ call = null, text, ...props }) {
	return (
		<Button
			rightIcon={call ? <ArrowForwardIcon /> : null}
			fontSize="sm"
			letterSpacing="inherit"
			colorScheme={useColorModeValue(light.primary, '')}
			{...props}
		>
			{text}
		</Button>
	);
}
CustomButton.propTypes = {
	call: PropTypes.string,
	text: PropTypes.string.isRequired,
};
