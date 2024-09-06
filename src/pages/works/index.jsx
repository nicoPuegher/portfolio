import React, { useContext } from 'react';

import useScroll from '@/hooks/useScroll';
import Context from '@/store/context';
import CustomSection from '@/components/ui/custom-section';
import CustomGrid from '@/components/ui/custom-grid';
import CustomGridItem from '@/components/ui/custom-grid-item';
import CustomDivider from '@/components/ui/custom-divider';
import projects from '@/constants/projects';

export default function Works() {
	useScroll();

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
				{!isLastItem && <CustomDivider />}
			</React.Fragment>
		);
	});

	return <CustomGrid customVariant="external">{renderProjects}</CustomGrid>;
}
