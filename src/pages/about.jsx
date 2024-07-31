import React from 'react';

import Section from '@/layouts/section';
import AboutMe from '@/components/about-me';

export default function About() {
	return (
		<>
			<Section mb={10} title="About me">
				<AboutMe />
			</Section>
		</>
	);
}
