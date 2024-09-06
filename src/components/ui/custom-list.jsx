import React from 'react';
import {
	useColorModeValue,
	ListItem,
	Text,
	Link,
	Tag,
	UnorderedList,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import CustomText from './custom-text';
import CustomFlex from './custom-flex';

import { dark } from '@/lib/colors';

export default function CustomList({ variant = 'text', list, stack = [] }) {
	const customList = list.map((item) => {
		if (variant === 'features') {
			return (
				<ListItem key={item.label} fontSize="sm">
					<CustomText>
						<Text as="b">{`${item.label}: `}</Text>
						{item.description}
					</CustomText>
				</ListItem>
			);
		}

		if (variant === 'projectDetails') {
			return (
				<ListItem key={item.label} fontSize="sm">
					<CustomText>
						<Text as="b">{`${item.label}: `}</Text>
						<Link href={item.url} isExternal>
							{item.description} <ExternalLinkIcon />
						</Link>
					</CustomText>
				</ListItem>
			);
		}

		return (
			<ListItem key={item} fontSize="sm">
				<CustomText>{item}</CustomText>
			</ListItem>
		);
	});

	if (variant === 'projectDetails') {
		customList.push(
			<ListItem key="tech" fontSize="sm">
				<Text as="i">
					<CustomFlex wrap="wrap" justify="center" align="center">
						<Text as="b">Stack: </Text>
						{stack.map((tech) => (
							<Tag key={tech} fontWeight="normal">
								{tech}
							</Tag>
						))}
					</CustomFlex>
				</Text>
			</ListItem>,
		);
	}

	return (
		<UnorderedList
			pr={4}
			spacing={2.5}
			listStylePos="inside"
			listStyleType={variant === 'projectDetails' ? 'none' : 'disc'}
			color={useColorModeValue(dark.dimmedBlack, '')}
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
