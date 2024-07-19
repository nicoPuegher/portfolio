import React, { useContext } from 'react';

import Context from '@/store/context';

import { ButtonGroup, Button } from '@chakra-ui/react';

export default function Menu() {
	const context = useContext(Context);

	return (
		<ButtonGroup
			display={{ base: 'none', md: 'flex' }}
			variant="ghost"
			spacing="3"
		>
			<Button onClick={() => context.handleChangePage('about')}>
				About
			</Button>
			<Button onClick={() => context.handleChangePage('works')}>
				Works
			</Button>
			<Button>Linkedin</Button>
			<Button>Github</Button>
		</ButtonGroup>
	);
}
