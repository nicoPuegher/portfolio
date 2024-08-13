import React from 'react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

export default function ExternalLink({ url, text }) {
	return (
		<Link href={url} isExternal>
			{text} <ExternalLinkIcon mx={2} />
		</Link>
	);
}
ExternalLink.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
