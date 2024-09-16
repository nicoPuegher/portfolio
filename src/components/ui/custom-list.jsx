import React from 'react';
import { useColorModeValue, Text, UnorderedList } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { light, dark } from '@/lib/colors';

import CustomListItem from './custom-list-item';
import CustomText from './custom-text';
import CustomLink from './custom-link';
import CustomFlex from './custom-flex';
import CustomTag from './custom-tag';

export default function CustomList({ variant = 'text', list, stack = [] }) {
	const labelColor = useColorModeValue(light.text_dark_content, '');

	const customList = list.map((item) => {
		if (variant === 'features') {
			return (
				<CustomListItem key={item.label}>
					<CustomText>
						<Text
							as="b"
							color={labelColor}
						>{`${item.label}: `}</Text>
						{item.description}
					</CustomText>
				</CustomListItem>
			);
		}

		if (variant === 'projectDetails') {
			return (
				<CustomListItem key={item.label}>
					<CustomText>
						<Text
							as="b"
							color={labelColor}
						>{`${item.label}: `}</Text>
						<CustomLink url={item.url} text={item.description} />
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
						<Text as="b" color={labelColor}>
							Stack:{' '}
						</Text>
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
			m={0}
			spacing={2.5}
			listStylePos="inside"
			listStyleType={variant === 'projectDetails' ? 'none' : 'disc'}
			color={useColorModeValue(light.secondary, dark.secondary)}
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
