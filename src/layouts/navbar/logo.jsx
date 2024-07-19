import React from 'react';

import { Heading, Link } from '@chakra-ui/react';

import { developer } from '@constants';

export default function Logo() {
	const handleClick = (e) => e.preventDefault();

	return (
		<Heading as="h1" size="md" letterSpacing="tighter">
			<Link href="/" onClick={handleClick}>
				{developer}
			</Link>
		</Heading>
	);
}
