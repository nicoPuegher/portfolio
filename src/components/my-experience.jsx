import React from 'react';
import { Text } from '@chakra-ui/react';

import developer from '@/constants';

export default function MyExperience() {
	return (
		<>
			<Text mb={5}>{developer.experience['1'].description}</Text>
			<Text mt={10} mb={5}>
				{developer.experience['2'].description}
			</Text>
		</>
	);
}

function BulletPoints({ target }) {
	const list = developer.experience[target].list.map((listItem) => (
		<ListItem key={listItem} fontSize="sm">
			{listItem}
		</ListItem>
	));

	return list;
}
