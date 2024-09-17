import React from 'react';
import { useColorModeValue, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

import CustomContainer from './ui/custom-container';

export default function Message({ children }) {
	return (
		<CustomContainer
			borderRadius="md"
			color={useColorModeValue(light.text_light_content, dark.textLight)}
			bg={useColorModeValue(light.bg_dark, dark.bgLight)}
		>
			<Text textAlign="center">{children}</Text>
		</CustomContainer>
	);
}
Message.propTypes = {
	children: PropTypes.node.isRequired,
};
