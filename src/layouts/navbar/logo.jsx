import React, { useContext } from 'react';

import Context from '@/store/context';

import { Heading, Link } from '@chakra-ui/react';

import { developer } from '@constants';

export default function Logo() {
	const context = useContext(Context);

	const handleClick = (e) => {
		e.preventDefault();
		context.handleChangePage('home');
	};

	return (
		<Heading as="h1" size="md" letterSpacing="tighter">
			<Link href="/" onClick={handleClick}>
				{developer}
			</Link>
		</Heading>
	);
}
