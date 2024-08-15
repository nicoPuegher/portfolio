import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Context from '@/store/context';
import Profile from '@/components/profile';
import Myself from '@/components/myself';
import ButtonCall from '@/components/ui/button-call';

export default function Greetings() {
	const context = useContext(Context);

	return (
		<CustomBox>
			<Profile />
			<Myself />
			<ButtonCall
				text="Check my work"
				goToPage={() => context.handleChangePage('works')}
			/>
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
