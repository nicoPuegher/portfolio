import React from 'react';
import { useColorModeValue, Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

import CustomBadge from './custom-badge';

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
			{badge && <CustomBadge text={badge} />}
			<Heading
				as={as}
				size={size}
				mb={2.5}
				color={useColorModeValue(
					light.text_dark_heading,
					dark.text_dark_heading,
				)}
			>
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
