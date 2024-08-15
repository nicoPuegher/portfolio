import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

export default function ButtonCall({ text, goToPage }) {
	return (
		<Button
			rightIcon={<ArrowForwardIcon />}
			letterSpacing="inherit"
			onClick={goToPage}
		>
			{text}
		</Button>
	);
}
ButtonCall.propTypes = {
	text: PropTypes.string.isRequired,
	goToPage: PropTypes.func.isRequired,
};
