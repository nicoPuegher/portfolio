import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomButton({ children, ...props }) {
	return (
		<Button letterSpacing="inherit" {...props}>
			{children}
		</Button>
	);
}
CustomButton.propTypes = {
	children: PropTypes.node.isRequired,
};
