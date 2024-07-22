import React from 'react';

import { Divider, Text } from '@chakra-ui/react';

import Section from '@/layouts/section';
import Message from '@/components/message';
import Greetings from '@/components/greetings';

import developer from '@/constants';

export default function Home() {
	return (
		<>
			<Message>{developer.greeting}</Message>
			<Greetings />
			<Divider width="50%" mx="auto" my={10} />
			<Section title="Quick summary ">
				<Text>{developer.quickSummary}</Text>
			</Section>
		</>
	);
}
