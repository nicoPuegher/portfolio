import React from 'react';
import { useColorModeValue, Tag } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

export default function CustomTag({ text }) {
	return (
		<Tag
			fontWeight="normal"
			color={useColorModeValue(light.text_dark_list, dark.list)}
			bg={useColorModeValue(light.bg_light_content, '')}
		>
			{text}
		</Tag>
	);
}
CustomTag.propTypes = {
	text: PropTypes.string.isRequired,
};
