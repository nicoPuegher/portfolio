import React from 'react';
import { useColorModeValue, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { dark } from '@/lib/colors';

import CustomContainer from './ui/custom-container';

export default function Message({ children }) {
	return (
		<CustomContainer
			borderRadius="md"
			color={useColorModeValue(dark.white, '')}
			bg={useColorModeValue(dark.black, '')}
		>
			<Text textAlign="center">{children}</Text>
		</CustomContainer>
	);
}
Message.propTypes = {
	children: PropTypes.node.isRequired,
};
