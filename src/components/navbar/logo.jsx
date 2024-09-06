import React, { useContext } from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';

import Context from '@/store/context';
import CustomButton from '@/components/ui/custom-button';
import colors from '@/lib/colors';
import developer from '@constants/developer';

export default function Logo() {
	const context = useContext(Context);

	return (
		<Heading as="h1" display="inline-flex">
			<CustomButton
				variant="link"
				fontSize="xl"
				text={developer.name}
				color={useColorModeValue(colors.white, colors.black)}
				onClick={() => context.handleChangePage('home')}
			/>
		</Heading>
	);
}
