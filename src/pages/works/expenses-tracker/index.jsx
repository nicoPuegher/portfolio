import React from 'react';
import { List } from '@chakra-ui/react';

import Section from '@/layouts/section';
import expensesTracker from '@/constants/projects/expenses-tracker';
import Breadcrumb from '@/pages/works/breadcrumb';
import ProjectDescription from '@/pages/works/project-description';
import ProjectLinks from '@/pages/works/project-links';
import ProjectTechnologies from '@/pages/works/project-technologies';
import ProjectImages from '@/pages/works/project-images';

export default function ExpensesTracker() {
	return (
		<Section title={expensesTracker.title}>
			<Breadcrumb
				name={expensesTracker.title}
				year={expensesTracker.year}
			/>
			<ProjectDescription project={expensesTracker} />
			<List>
				<ProjectLinks url={expensesTracker.link} />
				<ProjectTechnologies stack={expensesTracker.stack} />
			</List>
			<ProjectImages
				title={expensesTracker.title}
				preview={expensesTracker.preview}
				mobilePreview1={expensesTracker.mobilePreviews[0]}
				mobilePreview2={expensesTracker.mobilePreviews[1]}
				fallback={expensesTracker.fallback}
			/>
		</Section>
	);
}
