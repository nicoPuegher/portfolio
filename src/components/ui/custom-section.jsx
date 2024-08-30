import React from 'react';
import { Box, Heading, Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomSection({
	customVariant = 'h2',
	title,
	badge = null,
	children,
}) {
	const as = customVariant === 'h2' ? 'h2' : 'h3';
	const size = customVariant === 'h2' ? 'lg' : 'md';

	return (
		<Box as="section" textAlign="center">
			{badge && <Badge>{badge}</Badge>}
			<Heading as={as} size={size} mb={1}>
				{title}
			</Heading>
			{children}
		</Box>
	);
}
CustomSection.propTypes = {
	customVariant: PropTypes.string,
	title: PropTypes.string.isRequired,
	badge: PropTypes.string,
	children: PropTypes.node.isRequired,
};
