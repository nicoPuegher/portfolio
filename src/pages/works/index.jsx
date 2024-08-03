import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import Section from '@/layouts/section';
import GridItem from '@/components/grid-item';
import sortingThumbnail from '@assets/sorting/sorting.png';
import trackyThumbnail from '@/assets/tracky/tracky.png';

export default function Works() {
	return (
		<Section title="Works">
			<SimpleGrid gap={10}>
				<GridItem
					title="Sorting Visualizer"
					description="Frontend web application that animates the sorting process of various algorithms, offering an engaging way to explore and understand how these algorithms operate."
					src={sortingThumbnail}
					fallback="Loading image ..."
				/>
				<GridItem
					title="Tracky"
					description="Frontend web application designed to efficiently track and manage your expenses."
					src={trackyThumbnail}
					fallback="Loading image ..."
				/>
			</SimpleGrid>
		</Section>
	);
}
