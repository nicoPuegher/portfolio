import React from 'react';
import { Tag, ListItem, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

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
ProjectTechnologies.propTypes = {
	stack: PropTypes.instanceOf(Array).isRequired,
};
