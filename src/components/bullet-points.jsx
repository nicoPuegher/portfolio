import React from 'react';
import { List, ListItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

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
BulletPoints.propTypes = {
	items: PropTypes.instanceOf(Array).isRequired,
};
