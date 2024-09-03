import React from 'react';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomFlex({ children, ...props }) {
	return (
		<Flex gap={2} {...props}>
			{children}
		</Flex>
	);
}
CustomFlex.propTypes = {
	children: PropTypes.node.isRequired,
};
