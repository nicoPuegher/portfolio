import React, { useContext } from 'react';
import { SimpleGrid, Divider } from '@chakra-ui/react';

import Context from '@/store/context';
import Section from '@/layouts/section';
import GridItem from '@/components/grid-item';
import projects from '@/constants/projects';

export default function Works() {
	const context = useContext(Context);

	const projectEntries = Object.entries(projects);

	const portfolio = projectEntries.map(
		([project, { title, description, preview, fallback }], index) => {
			const isLastItem = projectEntries.length - 1 === index;

			return (
				<React.Fragment key={project}>
					<GridItem
						title={title}
						description={description}
						src={preview}
						fallback={fallback}
						goToPage={() => context.handleChangePage(project)}
					/>
					{!isLastItem && <Divider width="half" mx="auto" />}
				</React.Fragment>
			);
		},
	);

	return (
		<Section title="Works">
			<SimpleGrid gap={10}>{portfolio}</SimpleGrid>
		</Section>
	);
}
