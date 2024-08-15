import React from 'react';
import { Container } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function LayoutContainer({ as = 'div', children, ...props }) {
	return (
		<Container as={as} {...props}>
			{children}
		</Container>
	);
}
LayoutContainer.propTypes = {
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};
