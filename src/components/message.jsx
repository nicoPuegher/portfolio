import React from 'react';
import { useColorModeValue, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

import CustomContainer from './ui/custom-container';

export default function Message({ children }) {
	return (
		<CustomContainer
			borderRadius="md"
			color={useColorModeValue(light.textLight, dark.textLight)}
			bg={useColorModeValue(light.bgDark, dark.bgLight)}
		>
			<Text textAlign="center">{children}</Text>
		</CustomContainer>
	);
}
Message.propTypes = {
	children: PropTypes.node.isRequired,
};
