import React, { useContext } from 'react';
import { Heading } from '@chakra-ui/react';

import Context from '@/store/context';
import CustomButton from '@/components/ui/custom-button';
import developer from '@constants/developer';

export default function Logo() {
	const context = useContext(Context);

	return (
		<Heading as="h1" display="inline-flex">
			<CustomButton
				variant="link"
				fontSize="xl"
				color="white"
				text={developer.name}
				onClick={() => context.handleChangePage('home')}
			/>
		</Heading>
	);
}
