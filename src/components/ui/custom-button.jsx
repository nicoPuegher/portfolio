import React from 'react';
import { useColorModeValue, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import { dark } from '@/lib/colors';

export default function CustomButton({ call = null, text, ...props }) {
	return (
		<Button
			rightIcon={call ? <ArrowForwardIcon /> : null}
			fontSize="sm"
			letterSpacing="inherit"
			color={useColorModeValue(dark.black, '')}
			colorScheme={useColorModeValue(dark.active, '')}
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
