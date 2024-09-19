import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

import CustomButton from './custom-button';

export default function CustomActiveButton({ text, ...props }) {
	return (
		<CustomButton
			rightIcon={<ArrowForwardIcon />}
			text={text}
			color={useColorModeValue(
				light.text_light_content,
				dark.text_dark_button,
			)}
			colorScheme={useColorModeValue(light.primary, dark.primary)}
			{...props}
		/>
	);
}
CustomActiveButton.propTypes = {
	text: PropTypes.string.isRequired,
};
