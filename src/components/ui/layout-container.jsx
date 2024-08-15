import React from 'react';
import { Container } from '@chakra-ui/react';

export default function LayoutContainer({ as = 'div', children, ...props }) {
	return (
		<Container as={as} maxW="container.md" p={2} {...props}>
			{children}
		</Container>
	);
}
