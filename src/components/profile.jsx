import React from 'react';
import { Avatar } from '@chakra-ui/react';

import profilePicture from '@assets/profile.png';

export default function Profile() {
	return (
		<Avatar
			name="Nicolas Puegher"
			size="xl"
			borderWidth={4}
			borderStyle="solid"
			borderColor="black"
			src={profilePicture}
		/>
	);
}
