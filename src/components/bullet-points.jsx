import React from 'react';
import { UnorderedList, ListItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function BulletPoints({ items, features }) {
	let listItems;

	if (features) {
		listItems = items.map((item) => (
			<ListItem key={item.title}>
				<Text as="i">
					<Text as="b">{item.title}</Text>
					{item.content}
				</Text>
			</ListItem>
		));
	}

	return (
		<UnorderedList fontSize="sm" my={5} spacing={3}>
			{listItems}
		</UnorderedList>
	);
}
BulletPoints.propTypes = {
	items: PropTypes.instanceOf(Array).isRequired,
};
