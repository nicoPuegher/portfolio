import React from 'react';

import { Heading } from '@chakra-ui/react';

import { developer } from '@constants';

export default function Logo() {
	return (
		<Heading as="h1" size="md" letterSpacing="tighter">
			{developer}
		</Heading>
	);
}
