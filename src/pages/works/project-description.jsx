import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import BulletPoints from '@/components/bullet-points';

export default function ProjectDescription({ project }) {
	return (
		<>
			<Text>{project.description}</Text>
			<BulletPoints items={project.features} features="true" />
			<Text>{project.closer}</Text>
		</>
	);
}
ProjectDescription.propTypes = {
	project: PropTypes.instanceOf(Object).isRequired,
};
