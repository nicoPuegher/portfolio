import React from 'react';
import { useColorModeValue, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { dark } from '@/lib/colors';

export default function CustomText({ children }) {
	return (
		<Text as="i" color={useColorModeValue(dark.dimmedBlack, '')}>
			{children}
		</Text>
	);
}
CustomText.propTypes = {
	children: PropTypes.node.isRequired,
};
