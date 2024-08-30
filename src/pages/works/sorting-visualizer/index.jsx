import React from 'react';
import { Text } from '@chakra-ui/react';

import CustomSection from '@/components/ui/custom-section';
import CustomGrid from '@/components/ui/custom-grid';
import sortingVisualizer from '@/constants/projects/sorting-visualizer';
import Breadcrumb from '@/pages/works/breadcrumb';
import CustomList from '@/components/ui/custom-list';
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
				<CustomList
					variant="features"
					list={sortingVisualizer.features}
				/>
				<Text>{sortingVisualizer.closer}</Text>
				<CustomList
					variant="projectDetails"
					list={sortingVisualizer.details}
					stack={sortingVisualizer.stack}
				/>
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
