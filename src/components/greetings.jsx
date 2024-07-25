import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Profile from '@/components/profile';
import Myself from '@/components/myself';
import ButtonCall from '@/components/ui/button-call';

export default function Greetings() {
	return (
		<CustomBox>
			<Profile />
			<Myself />
			<ButtonCall />
		</CustomBox>
	);
}

function CustomBox({ children }) {
	return (
		<Box mx="auto" mt={5} display="grid" placeItems="center" gap={5}>
			{children}
		</Box>
	);
}
CustomBox.propTypes = {
	children: PropTypes.node.isRequired,
};
