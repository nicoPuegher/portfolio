import React from 'react';
import { Tag, ListItem, Box } from '@chakra-ui/react';

export default function ProjectTechnologies({ stack }) {
	const technologies = stack.map((item) => <Tag key={item}>{item}</Tag>);

	return (
		<ListItem>
			<Box display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
				{technologies}
			</Box>
		</ListItem>
	);
}
