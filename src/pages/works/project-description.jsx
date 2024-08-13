import React from 'react';
import { Text } from '@chakra-ui/react';

import BulletPoints from '@/components/bullet-points';

export default function ProjectDescription({ project }) {
	return (
		<>
			<Text>{project.description}</Text>
			<BulletPoints items={project.features} />
			<Text>{project.closer}</Text>
		</>
	);
}
