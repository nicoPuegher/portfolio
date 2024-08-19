import React from 'react';
import PropTypes from 'prop-types';

import LayoutWrapper from '@/components/ui/layout-wrapper';

export default function Nav({ children }) {
	return (
		<LayoutWrapper
			as="nav"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
		>
			{children}
		</LayoutWrapper>
	);
}
Nav.propTypes = {
	children: PropTypes.node.isRequired,
};
