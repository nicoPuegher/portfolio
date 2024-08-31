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
					{developer.about.map((paragraph) => (
						<Text key={paragraph}>{paragraph}</Text>
					))}
				</CustomGrid>
			</CustomSection>
			<Divider width="half" />
			{developer.experience.map((exp, index) => {
				const isLastItem = developer.experience.length - 1 === index;

				return (
					<React.Fragment key={exp.company}>
						<CustomSection title={exp.company} badge={exp.location}>
							<CustomGrid>
								<Text>{exp.description}</Text>
								<CustomList list={exp.responsibilities} />
							</CustomGrid>
						</CustomSection>
						{!isLastItem && <Divider width="half" />}
					</React.Fragment>
				);
			})}
		</CustomGrid>
	);
}
