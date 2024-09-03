import React from 'react';
import { MenuItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomMenuItem({ children, ...props }) {
	return (
		<MenuItem letterSpacing="inherit" {...props}>
			{children}
		</MenuItem>
	);
}
CustomMenuItem.propTypes = {
	children: PropTypes.node.isRequired,
};
