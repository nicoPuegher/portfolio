import React from 'react';
import { UnorderedList, ListItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomList({ list }) {
	return (
		<UnorderedList pr={4} spacing={2.5} listStylePos="inside">
			{list.map((item) => (
				<ListItem key={item} fontSize="sm">
					<Text as="i">{item}</Text>
				</ListItem>
			))}
		</UnorderedList>
	);
}
CustomList.propTypes = {
	list: PropTypes.instanceOf(Array).isRequired,
};
