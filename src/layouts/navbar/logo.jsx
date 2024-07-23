import React, { useContext } from 'react';

import { Heading, Link } from '@chakra-ui/react';

import developer from '@constants';

import Context from '@/store/context';

export default function Logo() {
	const context = useContext(Context);

	const handleClick = (e) => {
		e.preventDefault();
		context.handleChangePage('home');
	};

	return (
		<Heading as="h1" size="md" color="white">
			<Link href="/" onClick={handleClick}>
				{developer.name}
			</Link>
		</Heading>
	);
}
