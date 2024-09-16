import React from 'react';
import { useColorModeValue, MenuItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

export default function CustomMenuItem({ children, ...props }) {
	return (
		<MenuItem
			letterSpacing="inherit"
			{...props}
			bg={useColorModeValue(light.bg_light, dark.bgLight)}
			_focus={{
				bg: useColorModeValue(
					light.bg_light_content,
					dark.neutralHighlight,
				),
			}}
		>
			{children}
		</MenuItem>
	);
}
CustomMenuItem.propTypes = {
	children: PropTypes.node.isRequired,
};
