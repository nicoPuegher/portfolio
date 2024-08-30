import React from 'react';
import PropTypes from 'prop-types';

import CustomContainer from '@/components/ui/custom-container';

export default function Nav({ children }) {
	return (
		<CustomContainer
			as="nav"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
		>
			{children}
		</CustomContainer>
	);
}
Nav.propTypes = {
	children: PropTypes.node.isRequired,
};
