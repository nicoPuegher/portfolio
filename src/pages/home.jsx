import React, { useContext } from 'react';
import { Divider, Text } from '@chakra-ui/react';

import Context from '@/store/context';
import CustomGrid from '@/components/ui/custom-grid';
import Message from '@/components/message';
import Profile from '@/components/profile';
import ButtonCall from '@/components/ui/button-call';
import Section from '@/layouts/section';
import developer from '@/constants/developer';

export default function Home() {
	const context = useContext(Context);

	return (
		<CustomGrid>
			<Message>{developer.greeting}</Message>
			<Profile />
			<Section title={developer.name}>
				<Text>{developer.role}</Text>
			</Section>
			<ButtonCall
				text="Check my work"
				goToPage={() => context.handleChangePage('works')}
			/>
			<Divider width="half" />
			<Section title="Quick summary ">
				<Text>{developer.quickSummary}</Text>
			</Section>
		</CustomGrid>
	);
}
