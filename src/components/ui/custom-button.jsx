import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

export default function CustomButton({ call = null, text, ...props }) {
	return (
		<Button
			rightIcon={call ? <ArrowForwardIcon /> : null}
			letterSpacing="inherit"
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
