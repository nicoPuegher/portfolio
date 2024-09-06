import React from 'react';
import { useColorModeValue, Tag } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { dark } from '@/lib/colors';

export default function CustomTag({ text }) {
	return (
		<Tag
			fontWeight="normal"
			color={useColorModeValue(dark.dimmedBlack, '')}
		>
			{text}
		</Tag>
	);
}
CustomTag.propTypes = {
	text: PropTypes.string.isRequired,
};
