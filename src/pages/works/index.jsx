import React, { useContext } from 'react';
import { SimpleGrid, Divider } from '@chakra-ui/react';

import Context from '@/store/context';
import CustomSection from '@/components/ui/custom-section';
import CustomGrid from '@/components/ui/custom-grid';
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
					<CustomSection title={title}>
						<CustomGrid>
							<GridItem
								title={title}
								description={description}
								src={preview}
								fallback={fallback}
								goToPage={() =>
									context.handleChangePage(project)
								}
							/>
						</CustomGrid>
					</CustomSection>
					{!isLastItem && <Divider width="half" />}
				</React.Fragment>
			);
		},
	);

	return <CustomGrid customVariant="external">{portfolio}</CustomGrid>;
}
