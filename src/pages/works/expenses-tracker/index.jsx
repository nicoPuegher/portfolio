import React from 'react';
import { Text } from '@chakra-ui/react';

import CustomSection from '@/components/ui/custom-section';
import CustomGrid from '@/components/ui/custom-grid';
import expensesTracker from '@/constants/projects/expenses-tracker';
import Breadcrumb from '@/pages/works/breadcrumb';
import CustomList from '@/components/ui/custom-list';
import ProjectImages from '@/pages/works/project-images';

export default function ExpensesTracker() {
	return (
		<CustomSection title={expensesTracker.name}>
			<CustomGrid>
				<Breadcrumb
					name={expensesTracker.name}
					year={expensesTracker.year}
				/>
				<Text>{expensesTracker.description}</Text>
				<CustomList
					variant="features"
					list={expensesTracker.features}
				/>
				<Text>{expensesTracker.summaryNote}</Text>
				<CustomList
					variant="projectDetails"
					list={expensesTracker.links}
					stack={expensesTracker.techStack}
				/>
				<ProjectImages
					previewImage={expensesTracker.previewImage}
					mobilePreview1={expensesTracker.mobilePreviews[0]}
					mobilePreview2={expensesTracker.mobilePreviews[1]}
					imageFallback={expensesTracker.imageFallback}
				/>
			</CustomGrid>
		</CustomSection>
	);
}
