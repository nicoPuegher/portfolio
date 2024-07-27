import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

export default function ButtonCall({ goToPage }) {
	return (
		<Button
			rightIcon={<ArrowForwardIcon />}
			letterSpacing="inherit"
			onClick={goToPage}
		>
			Check my work
		</Button>
	);
}
ButtonCall.propTypes = {
	goToPage: PropTypes.func.isRequired,
};
