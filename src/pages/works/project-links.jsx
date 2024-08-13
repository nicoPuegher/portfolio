import React from 'react';
import { ListItem, Badge } from '@chakra-ui/react';

import ExternalLink from '@/components/external-link';

export default function ProjectLinks({ url }) {
	return (
		<>
			<ListItem mb={0.5}>
				<Badge>Demo</Badge>
				<ExternalLink url={url} text="Live application" />
			</ListItem>
			<ListItem mb={0.5}>
				<Badge>Source</Badge>
				<ExternalLink url={url} text="Repository" />
			</ListItem>
		</>
	);
}
