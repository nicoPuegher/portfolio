import React from 'react';

import Section from '@/layouts/section';
import sortingVisualizer from '@/constants/projects/sorting-visualizer';
import Breadcrumb from '@/components/breadcrumb';

export default function SortingVisualizer() {
	return (
		<Section title={sortingVisualizer.title}>
			<Breadcrumb
				name={sortingVisualizer.title}
				year={sortingVisualizer.year}
			/>
		</Section>
	);
}
