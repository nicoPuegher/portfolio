import React from 'react';

import { ButtonGroup, Button } from '@chakra-ui/react';

export default function Menu() {
	return (
		<ButtonGroup
			display={{ base: 'none', md: 'flex' }}
			variant="ghost"
			spacing="3"
		>
			<Button>About</Button>
			<Button>Works</Button>
			<Button>Linkedin</Button>
			<Button>Github</Button>
		</ButtonGroup>
	);
}
