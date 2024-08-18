import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function InlineWrapper({ children }) {
	return <Box>{children}</Box>;
}
InlineWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};
