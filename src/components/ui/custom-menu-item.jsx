import React from 'react';
import { useColorModeValue, MenuItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

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
