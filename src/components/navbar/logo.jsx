import React, { useContext } from 'react';
import { Heading, Button } from '@chakra-ui/react';

import Context from '@/store/context';
import developer from '@constants/developer';

export default function Logo() {
	const context = useContext(Context);

	const handleClick = () => context.handleChangePage('home');

	return (
		<Heading as="h1" display="inline-flex">
			<Button
				variant="link"
				fontSize="xl"
				color="white"
				onClick={handleClick}
			>
				{developer.name}
			</Button>
		</Heading>
	);
}
