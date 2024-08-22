import React from 'react';
import { Grid } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomGrid({ customVariant = 'internal', children }) {
	const customGap = customVariant === 'internal' ? 5 : 10;

	return (
		<Grid placeItems="center" gap={customGap}>
			{children}
		</Grid>
	);
}
CustomGrid.propTypes = {
	customVariant: PropTypes.string,
	children: PropTypes.node.isRequired,
};
