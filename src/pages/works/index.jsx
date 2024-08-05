import React, { useContext } from 'react';
import { SimpleGrid, Divider } from '@chakra-ui/react';

import Context from '@/store/context';
import Section from '@/layouts/section';
import GridItem from '@/components/grid-item';
import sortingThumbnail from '@assets/sorting/sorting.png';
import trackyThumbnail from '@/assets/tracky/tracky.png';

export default function Works() {
	const context = useContext(Context);

	return (
		<Section title="Works">
			<SimpleGrid gap={10}>
				<GridItem
					title="Sorting Visualizer"
					description="Frontend web application that animates the sorting process of various algorithms, offering an engaging way to explore and understand how these algorithms operate."
					src={sortingThumbnail}
					fallback="Loading image ..."
					goToPage={() => context.handleChangePage('sorting')}
				/>
				<Divider width="half" mx="auto" />
				<GridItem
					title="Tracky"
					description="Frontend web application designed to efficiently track and manage your expenses."
					src={trackyThumbnail}
					fallback="Loading image ..."
					goToPage={() => context.handleChangePage('tracky')}
				/>
			</SimpleGrid>
		</Section>
	);
}
