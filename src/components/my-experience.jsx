import React from 'react';
import { Text } from '@chakra-ui/react';

import developer from '@/constants/developer';

import CustomGrid from './ui/custom-grid';
import CustomList from './ui/custom-list';

export default function MyExperience() {
	return (
		<CustomGrid customVariant="external">
			<CustomGrid>
				<Text>{developer.experience['1'].description}</Text>
				<CustomList list={developer.experience[1].list} />
			</CustomGrid>
			<CustomGrid>
				<Text>{developer.experience['2'].description}</Text>
				<CustomList list={developer.experience[2].list} />
			</CustomGrid>
		</CustomGrid>
	);
}
