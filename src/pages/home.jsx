import React, { useContext } from 'react';
import { Text } from '@chakra-ui/react';

import Context from '@/store/context';
import CustomGrid from '@/components/ui/custom-grid';
import Message from '@/components/message';
import Profile from '@/components/profile';
import CustomSection from '@/components/ui/custom-section';
import CustomActiveButton from '@/components/ui/custom-active-button';
import CustomDivider from '@/components/ui/custom-divider';
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
				<CustomActiveButton
					text="Check my work"
					onClick={() => context.handleChangePage('works')}
				/>
			</CustomGrid>
			<CustomDivider />
			<CustomSection title="Summary ">
				<Text>{developer.summary}</Text>
			</CustomSection>
		</CustomGrid>
	);
}
