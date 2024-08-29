import React from 'react';
import {
	ListItem,
	Text,
	Box,
	Link,
	Tag,
	UnorderedList,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

export default function CustomList({ variant = 'text', list, stack = [] }) {
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

		if (variant === 'projectDetails') {
			return (
				<ListItem key={item.key} fontSize="sm">
					<Text as="i">
						<Text as="b">{item.key} </Text>
						<Link href={item.url} isExternal>
							{item.placeHolder} <ExternalLinkIcon />
						</Link>
					</Text>
				</ListItem>
			);
		}

		return (
			<ListItem key={item} fontSize="sm">
				<Text as="i">{item}</Text>
			</ListItem>
		);
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
	stack: PropTypes.instanceOf(Array),
};
