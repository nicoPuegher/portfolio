import { List, ListItem, Text } from '@chakra-ui/react';

export default function BulletPoints({ items }) {
	const listItems = items.map((item) => (
		<ListItem key={item}>
			<Text as="i">{item}</Text>
		</ListItem>
	));

	return (
		<List fontSize="sm" my={5} spacing={3}>
			{listItems}
		</List>
	);
}
