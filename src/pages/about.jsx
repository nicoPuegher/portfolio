import React from 'react';
import { Divider } from '@chakra-ui/react';

import Section from '@/layouts/section';
import AboutMe from '@/components/about-me';
import MyExperience from '@/components/my-experience';

export default function About() {
	return (
		<>
			<Section title="About me">
				<AboutMe />
			</Section>
			<Divider width="half" mx="auto" my={10} />
			<Section title="My experience">
				<MyExperience />
			</Section>
		</>
	);
}
