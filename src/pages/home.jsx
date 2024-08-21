import React from 'react';
import { Divider, Text } from '@chakra-ui/react';

import CustomGrid from '@/components/ui/custom-grid';
import Message from '@/components/message';
import Profile from '@/components/profile';
import Myself from '@/components/myself';
import ButtonCall from '@/components/ui/button-call';
import Section from '@/layouts/section';
import developer from '@/constants/developer';

export default function Home() {
	return (
		<CustomGrid>
			<Message>{developer.greeting}</Message>
			<Profile />
			<Myself />
			<ButtonCall text="Check my work" />
			<Divider width="half" mx="auto" my={10} />
			<Section title="Quick summary ">
				<Text>{developer.quickSummary}</Text>
			</Section>
		</CustomGrid>
	);
}
