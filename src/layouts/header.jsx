import React from 'react';

import { Box } from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function Header({ children }) {
	return <Box as="header">{children}</Box>;
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
};
