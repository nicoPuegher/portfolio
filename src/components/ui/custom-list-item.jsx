import React from 'react';
import { ListItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function CustomListItem({ children }) {
	return <ListItem fontSize="sm">{children}</ListItem>;
}
CustomListItem.propTypes = {
	children: PropTypes.node.isRequired,
};
