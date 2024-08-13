import React from 'react';
import { List } from '@chakra-ui/react';

import Section from '@/layouts/section';
import sortingVisualizer from '@/constants/projects/sorting-visualizer';
import Breadcrumb from '@/pages/works/breadcrumb';
import ProjectDescription from '@/pages/works/project-description';
import ProjectLinks from '@/pages/works/project-links';
import ProjectTechnologies from '@/pages/works/project-technologies';

export default function SortingVisualizer() {
	return (
		<Section title={sortingVisualizer.title}>
			<Breadcrumb
				name={sortingVisualizer.title}
				year={sortingVisualizer.year}
			/>
			<ProjectDescription project={sortingVisualizer} />
			<List>
				<ProjectLinks url={sortingVisualizer.link} />
				<ProjectTechnologies stack={sortingVisualizer.stack} />
			</List>
		</Section>
	);
}
