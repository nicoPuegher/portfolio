import React from 'react';
import { Grid } from '@chakra-ui/react';

export default function CustomGrid({ children }) {
	return (
		<Grid placeItems="center" gap={5}>
			{children}
		</Grid>
	);
}
