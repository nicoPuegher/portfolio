import React, { useContext } from 'react';
import { Divider } from '@chakra-ui/react';

import Context from '@/store/context';
import CustomSection from '@/components/ui/custom-section';
import CustomGrid from '@/components/ui/custom-grid';
import CustomGridItem from '@/components/ui/custom-grid-item';
import projects from '@/constants/projects';

export default function Works() {
	const context = useContext(Context);

	const projectValues = Object.values(projects);

	const renderProjects = projectValues.map((project, index) => {
		const isLastItem = projectValues.length - 1 === index;

		return (
			<React.Fragment key={project.name}>
				<CustomSection title={project.name}>
					<CustomGrid>
						<CustomGridItem
							name={project.name}
							type={project.type}
							description={project.description}
							previewImage={project.previewImage}
							goToPage={() =>
								context.handleChangePage(project.context)
							}
						/>
					</CustomGrid>
				</CustomSection>
				{!isLastItem && <Divider width="half" />}
			</React.Fragment>
		);
	});

	return <CustomGrid customVariant="external">{renderProjects}</CustomGrid>;
}
