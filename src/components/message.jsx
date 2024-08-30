import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import CustomContainer from './ui/custom-container';

export default function Message({ children }) {
	return (
		<CustomContainer borderRadius="md" color="white" bg="black">
			<Text textAlign="center">{children}</Text>
		</CustomContainer>
	);
}
Message.propTypes = {
	children: PropTypes.node.isRequired,
};
