import React from 'react';
import { useColorModeValue, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

export default function CustomLink({ url, text }) {
	return (
		<Link href={url} isExternal>
			{text}{' '}
			<ExternalLinkIcon
				color={useColorModeValue(light.link, dark.link)}
			/>
		</Link>
	);
}
CustomLink.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
