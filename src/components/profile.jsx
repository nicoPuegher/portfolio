import React from 'react';
import { useColorModeValue, Avatar } from '@chakra-ui/react';

import profilePicture from '@assets/profile.png';
import { light, dark } from '@/lib/colors';

export default function Profile() {
	return (
		<Avatar
			src={profilePicture}
			name="Nicolas Puegher"
			size="xl"
			borderStyle="solid"
			borderWidth={4}
			borderColor={useColorModeValue(
				light.bg_light_content,
				dark.bg_light_content,
			)}
			bg={useColorModeValue(
				light.bg_light_content,
				dark.bg_light_content,
			)}
		/>
	);
}
