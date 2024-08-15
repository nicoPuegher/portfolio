import React from 'react';
import { Tag, ListItem, Box, Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function ProjectTechnologies({ stack }) {
	const technologies = stack.map((item) => <Tag key={item}>{item}</Tag>);

	return (
		<ListItem>
			<Box display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
				<Badge mr={1} display="flex" alignItems="center">
					stack
				</Badge>
				{technologies}
			</Box>
		</ListItem>
	);
}
ProjectTechnologies.propTypes = {
	stack: PropTypes.instanceOf(Array).isRequired,
};
