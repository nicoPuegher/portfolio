import React, { useContext } from 'react';
import { SimpleGrid, Divider } from '@chakra-ui/react';

import Context from '@/store/context';
import Section from '@/layouts/section';
import GridItem from '@/components/grid-item';
import works from '@/constants/works';

export default function Projects() {
	const context = useContext(Context);

	return (
		<Section title="Works">
			<SimpleGrid gap={10}>Projects</SimpleGrid>
		</Section>
	);
}
