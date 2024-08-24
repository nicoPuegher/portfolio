import React from 'react';
import { UnorderedList, ListItem, Text } from '@chakra-ui/react';

export default function CustomList({ list }) {
	return (
		<UnorderedList spacing={2.5}>
			{list.map((item) => (
				<ListItem key={item} fontSize="sm">
					<Text as="i">{item}</Text>
				</ListItem>
			))}
		</UnorderedList>
	);
}
