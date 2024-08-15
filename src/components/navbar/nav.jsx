import React from 'react';
import PropTypes from 'prop-types';

import LayoutContainer from '@/components/ui/layout-container';

export default function Nav({ children }) {
	return (
		<LayoutContainer
			as="nav"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
		>
			{children}
		</LayoutContainer>
	);
}
Nav.propTypes = {
	children: PropTypes.node.isRequired,
};
