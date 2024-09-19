import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomButton({ text, ...props }) {
	return (
		<Button fontSize="sm" letterSpacing="inherit" {...props}>
			{text}
		</Button>
	);
}
CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
};
