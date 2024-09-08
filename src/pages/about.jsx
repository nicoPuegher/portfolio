import React from 'react';
import { Text } from '@chakra-ui/react';

import useScroll from '@/hooks/useScroll';
import CustomGrid from '@/components/ui/custom-grid';
import CustomSection from '@/components/ui/custom-section';
import CustomDivider from '@/components/ui/custom-divider';
import CustomList from '@/components/ui/custom-list';
import developer from '@/constants/developer';

export default function About() {
	useScroll();

	return (
		<CustomGrid customVariant="external">
			<CustomSection title="About me">
				<CustomGrid>
					{developer.about.map((paragraph) => (
						<Text key={paragraph}>{paragraph}</Text>
					))}
				</CustomGrid>
			</CustomSection>
			<CustomDivider />
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
						{!isLastItem && <CustomDivider />}
					</React.Fragment>
				);
			})}
		</CustomGrid>
	);
}
