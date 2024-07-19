import React from 'react';

import { Box } from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function Main({ children }) {
	return <Box as="main">{children}</Box>;
}

Main.propTypes = {
	children: PropTypes.node.isRequired,
};
