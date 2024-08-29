import React from 'react';
import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomList({ variant = 'text', list }) {
	const customList = list.map((item) => {
		if (variant === 'features') {
			return (
				<ListItem key={item.title} fontSize="sm">
					<Text as="i">
						<Text as="b">{item.title}</Text>
						{item.content}
					</Text>
				</ListItem>
			);
		}
	});

	return (
		<UnorderedList
			pr={4}
			spacing={2.5}
			listStylePos="inside"
			listStyleType={variant === 'projectDetails' ? 'none' : 'disc'}
		>
			{customList}
		</UnorderedList>
	);
}
CustomList.propTypes = {
	variant: PropTypes.string,
	list: PropTypes.instanceOf(Array).isRequired,
};
