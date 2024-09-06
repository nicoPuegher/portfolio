import React from 'react';
import { useColorModeValue, MenuItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { dark } from '@/lib/colors';

export default function CustomMenuItem({ children, ...props }) {
	return (
		<MenuItem
			letterSpacing="inherit"
			color={useColorModeValue(dark.black, '')}
			bg={useColorModeValue(dark.white, '')}
			_focus={{ bg: useColorModeValue(dark.focus, '') }}
			{...props}
		>
			{children}
		</MenuItem>
	);
}
CustomMenuItem.propTypes = {
	children: PropTypes.node.isRequired,
};
