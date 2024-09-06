import React from 'react';
import { useColorModeValue, Avatar } from '@chakra-ui/react';

import profilePicture from '@assets/profile.png';
import { dark } from '@/lib/colors';

export default function Profile() {
	return (
		<Avatar
			src={profilePicture}
			name="Nicolas Puegher"
			size="xl"
			outline="4px solid"
			outlineColor={useColorModeValue(dark.black, '')}
			bg={useColorModeValue(dark.black, '')}
		/>
	);
}
