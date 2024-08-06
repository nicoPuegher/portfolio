import React, { useContext } from 'react';
import { SimpleGrid, Divider } from '@chakra-ui/react';

import Context from '@/store/context';
import Section from '@/layouts/section';
import GridItem from '@/components/grid-item';
import works from '@/constants/works';

export default function Projects() {
	const context = useContext(Context);

	const workEntries = Object.entries(works);

	const projects = workEntries.map(
		([project, { title, description, src, fallback }], index) => {
			const isLastItem = workEntries.length - 1 === index;

			return (
				<React.Fragment key={project}>
					<GridItem
						title={title}
						description={description}
						src={Object.values(src)[0]}
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
			<SimpleGrid gap={10}>{projects}</SimpleGrid>
		</Section>
	);
}
