import React from 'react';
import { UnorderedList, ListItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomList({ list, features = 'false' }) {
	return (
		<UnorderedList pr={4} spacing={2.5} listStylePos="inside">
			{list.map((item) => {
				if (features) {
					return (
						<ListItem key={item.title} fontSize="sm">
							<Text as="i">
								<Text as="b">{item.title}</Text>
								{item.content}
							</Text>
						</ListItem>
					);
				}
				return (
					<ListItem key={item} fontSize="sm">
						<Text as="i">{item}</Text>
					</ListItem>
				);
			})}
		</UnorderedList>
	);
}
CustomList.propTypes = {
	list: PropTypes.instanceOf(Array).isRequired,
	features: PropTypes.string,
};
