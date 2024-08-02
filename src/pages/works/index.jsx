import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import Section from '@/layouts/section';
import GridItem from '@/components/grid-item';
import trackyThumbnail from '@/assets/tracky/tracky.png';

export default function Works() {
	return (
		<Section title="Works">
			<SimpleGrid>
				<GridItem
					title="Tracky"
					description="Frontend web application designed to efficiently track and manage your expenses."
					src={trackyThumbnail}
				/>
			</SimpleGrid>
		</Section>
	);
}
