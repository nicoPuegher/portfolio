import React, { useContext } from 'react';

import { ButtonGroup, Button } from '@chakra-ui/react';

import Context from '@/store/context';

export default function Menu() {
	const context = useContext(Context);

	return (
		<ButtonGroup display="none" spacing={3} variant="ghost">
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
