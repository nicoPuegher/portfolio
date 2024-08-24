import React from 'react';
import { Text, Divider } from '@chakra-ui/react';

import CustomGrid from '@/components/ui/custom-grid';
import CustomSection from '@/components/ui/custom-section';
import MyExperience from '@/components/my-experience';
import developer from '@/constants/developer';

export default function About() {
	return (
		<CustomGrid customVariant="external">
			<CustomSection title="About me">
				<CustomGrid>
					{Object.values(developer.summary).map((paragraph) => (
						<Text key={paragraph}>{paragraph}</Text>
					))}
				</CustomGrid>
			</CustomSection>
			<Divider width="half" />
			<CustomSection title="My experience">
				<MyExperience />
			</CustomSection>
		</CustomGrid>
	);
}
