import React from 'react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

export default function CustomLink({ url, children }) {
	return (
		<Link href={url} isExternal>
			{children} <ExternalLinkIcon />
		</Link>
	);
}
CustomLink.propTypes = {
	url: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
