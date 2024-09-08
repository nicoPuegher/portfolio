import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomText({ children }) {
	return <Text as="i">{children}</Text>;
}
CustomText.propTypes = {
	children: PropTypes.node.isRequired,
};
