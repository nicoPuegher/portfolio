import React from 'react';
import { Text, List } from '@chakra-ui/react';

import CustomSection from '@/components/ui/custom-section';
import CustomGrid from '@/components/ui/custom-grid';
import sortingVisualizer from '@/constants/projects/sorting-visualizer';
import Breadcrumb from '@/pages/works/breadcrumb';
import CustomList from '@/components/ui/custom-list';
import ProjectLinks from '@/pages/works/project-links';
import ProjectTechnologies from '@/pages/works/project-technologies';
import ProjectImages from '@/pages/works/project-images';

export default function SortingVisualizer() {
	return (
		<CustomSection title={sortingVisualizer.title}>
			<CustomGrid>
				<Breadcrumb
					name={sortingVisualizer.title}
					year={sortingVisualizer.year}
				/>
				<Text>{sortingVisualizer.description}</Text>
				<CustomList list={sortingVisualizer.features} features="true" />
				<Text>{sortingVisualizer.closer}</Text>
				<List>
					<ProjectLinks url={sortingVisualizer.link} />
					<ProjectTechnologies stack={sortingVisualizer.stack} />
				</List>
				<ProjectImages
					preview={sortingVisualizer.preview}
					mobilePreview1={sortingVisualizer.mobilePreviews[0]}
					mobilePreview2={sortingVisualizer.mobilePreviews[1]}
					fallback={sortingVisualizer.fallback}
				/>
			</CustomGrid>
		</CustomSection>
	);
}
