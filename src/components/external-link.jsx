import React from 'react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function ExternalLink({ url, text }) {
	return (
		<Link href={url} isExternal>
			{text} <ExternalLinkIcon mx={2} />
		</Link>
	);
}
