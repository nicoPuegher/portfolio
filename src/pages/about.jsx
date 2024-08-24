import React from 'react';
import { Divider } from '@chakra-ui/react';

import CustomGrid from '@/components/ui/custom-grid';
import CustomSection from '@/components/ui/custom-section';
import AboutMe from '@/components/about-me';
import MyExperience from '@/components/my-experience';

export default function About() {
	return (
		<CustomGrid customVariant="external">
			<CustomSection title="About me">
				<AboutMe />
			</CustomSection>
			<Divider width="half" />
			<CustomSection title="My experience">
				<MyExperience />
			</CustomSection>
		</CustomGrid>
	);
}
