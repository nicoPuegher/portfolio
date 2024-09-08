import React from 'react';
import { useColorModeValue, Text, Link, UnorderedList } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

import CustomListItem from './custom-list-item';
import CustomText from './custom-text';
import CustomFlex from './custom-flex';
import CustomTag from './custom-tag';

export default function CustomList({ variant = 'text', list, stack = [] }) {
	const customList = list.map((item) => {
		if (variant === 'features') {
			return (
				<CustomListItem key={item.label}>
					<CustomText>
						<Text as="b">{`${item.label}: `}</Text>
						{item.description}
					</CustomText>
				</CustomListItem>
			);
		}

		if (variant === 'projectDetails') {
			return (
				<CustomListItem key={item.label}>
					<CustomText>
						<Text as="b">{`${item.label}: `}</Text>
						<Link href={item.url} isExternal>
							{item.description} <ExternalLinkIcon />
						</Link>
					</CustomText>
				</CustomListItem>
			);
		}

		return (
			<CustomListItem key={item}>
				<CustomText>{item}</CustomText>
			</CustomListItem>
		);
	});

	if (variant === 'projectDetails') {
		customList.push(
			<CustomListItem key="tech">
				<CustomText>
					<CustomFlex wrap="wrap" justify="center" align="center">
						<Text as="b">Stack: </Text>
						{stack.map((tech) => (
							<CustomTag key={tech} text={tech} />
						))}
					</CustomFlex>
				</CustomText>
			</CustomListItem>,
		);
	}

	return (
		<UnorderedList
			pr={4}
			spacing={2.5}
			listStylePos="inside"
			listStyleType={variant === 'projectDetails' ? 'none' : 'disc'}
			color={useColorModeValue(light.list, '')}
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
