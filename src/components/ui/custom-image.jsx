import React from 'react';
import {
	useColorModeValue,
	AspectRatio,
	Image,
	Center,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

export default function CustomImage({
	src,
	alt = 'Application preview',
	ratio = 'desktop',
}) {
	const customRatio = ratio === 'desktop' ? 16 / 10 : 9 / 16;

	return (
		<AspectRatio
			w="full"
			padding="1px"
			borderRadius="md"
			ratio={customRatio}
			bg={useColorModeValue(
				light.bg_light_content,
				dark.bg_light_content,
			)}
		>
			<Image
				src={src}
				alt={alt}
				fallback={<Center>Loading image...</Center>}
				padding="1px"
				borderRadius="md"
			/>
		</AspectRatio>
	);
}
CustomImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	ratio: PropTypes.string,
};
