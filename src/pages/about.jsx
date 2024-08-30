import React from 'react';
import { Text, Divider } from '@chakra-ui/react';

import CustomGrid from '@/components/ui/custom-grid';
import CustomSection from '@/components/ui/custom-section';
import CustomList from '@/components/ui/custom-list';
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
			<CustomSection title="EPAM Anywhere">
				<CustomGrid>
					<Text>{developer.experience['1'].description}</Text>
					<CustomList list={developer.experience[1].list} />
				</CustomGrid>
			</CustomSection>
			<Divider width="half" />
			<CustomSection title="Fizzit">
				<CustomGrid>
					<Text>{developer.experience['2'].description}</Text>
					<CustomList list={developer.experience[2].list} />
				</CustomGrid>
			</CustomSection>
		</CustomGrid>
	);
}
