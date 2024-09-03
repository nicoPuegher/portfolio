import React from 'react';
import { Text } from '@chakra-ui/react';

import CustomSection from '@/components/ui/custom-section';
import CustomGrid from '@/components/ui/custom-grid';
import Breadcrumb from '@/pages/works/breadcrumb';
import CustomList from '@/components/ui/custom-list';
import ProjectImages from '@/pages/works/project-images';
import sortingVisualizer from '@/constants/projects/sorting-visualizer';

export default function SortingVisualizer() {
	return (
		<CustomSection title={sortingVisualizer.name}>
			<CustomGrid>
				<Breadcrumb
					name={sortingVisualizer.name}
					year={sortingVisualizer.year}
				/>
				<Text>{sortingVisualizer.description}</Text>
				<CustomList
					variant="features"
					list={sortingVisualizer.features}
				/>
				<Text>{sortingVisualizer.summaryNote}</Text>
				<CustomList
					variant="projectDetails"
					list={sortingVisualizer.links}
					stack={sortingVisualizer.techStack}
				/>
				<ProjectImages
					previewImage={sortingVisualizer.previewImage}
					mobilePreview1={sortingVisualizer.mobilePreviews[0]}
					mobilePreview2={sortingVisualizer.mobilePreviews[1]}
					imageFallback={sortingVisualizer.imageFallback}
				/>
			</CustomGrid>
		</CustomSection>
	);
}
