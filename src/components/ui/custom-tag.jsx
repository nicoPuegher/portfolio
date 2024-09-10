import React from 'react';
import { useColorModeValue, Tag } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

export default function CustomTag({ text }) {
	return (
		<Tag
			fontWeight="normal"
			color={useColorModeValue(light.list, dark.list)}
		>
			{text}
		</Tag>
	);
}
CustomTag.propTypes = {
	text: PropTypes.string.isRequired,
};
