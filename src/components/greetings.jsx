import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Context from '@/store/context';
import Profile from '@/components/profile';
import Myself from '@/components/myself';
import ButtonCall from '@/components/ui/button-call';

import CustomGrid from './ui/custom-grid';

export default function Greetings() {
	const context = useContext(Context);

	return (
		<CustomGrid>
			<Profile />
			<Myself />
			<ButtonCall
				text="Check my work"
				goToPage={() => context.handleChangePage('works')}
			/>
		</CustomGrid>
	);
}
