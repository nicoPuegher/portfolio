import React, { useContext } from 'react';
import { Divider, Text } from '@chakra-ui/react';

import Context from '@/store/context';
import CustomGrid from '@/components/ui/custom-grid';
import Message from '@/components/message';
import Profile from '@/components/profile';
import CustomSection from '@/components/ui/custom-section';
import CustomButton from '@/components/ui/custom-button';
import developer from '@/constants/developer';

export default function Home() {
	const context = useContext(Context);

	return (
		<CustomGrid customVariant="external">
			<Message>{developer.welcomeMessage}</Message>
			<CustomGrid>
				<Profile />
				<CustomSection title={developer.name}>
					<Text>{developer.role}</Text>
				</CustomSection>
				<CustomButton
					call="action"
					text="Check my work"
					goToPage={() => context.handleChangePage('works')}
				/>
			</CustomGrid>
			<Divider width="half" />
			<CustomSection title="Summary ">
				<Text>{developer.summary}</Text>
			</CustomSection>
		</CustomGrid>
	);
}
