import React from 'react';
import { Text, UnorderedList, ListItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import developer from '@/constants';

export default function MyExperience() {
	return (
		<>
			<Text mb={5}>{developer.experience['1'].description}</Text>
			<UnorderedList spacing={3.5}>
				<BulletPoints target="1" />
			</UnorderedList>
			<Text mt={10} mb={5}>
				{developer.experience['2'].description}
			</Text>
			<UnorderedList spacing={3.5}>
				<BulletPoints target="2" />
			</UnorderedList>
		</>
	);
}

function BulletPoints({ target }) {
	const list = developer.experience[target].list.map((listItem) => (
		<ListItem key={listItem} fontSize="sm">
			<Text as="i">{listItem}</Text>
		</ListItem>
	));

	return list;
}
BulletPoints.propTypes = {
	target: PropTypes.string.isRequired,
};
