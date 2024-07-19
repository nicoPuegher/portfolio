import React, { useReducer } from 'react';

import reducer from '@store/reducer';
import Context from '@store/context';
import generateValue from '@store/generate-value';

import PropTypes from 'prop-types';

export default function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		page: 'home',
	});

	const value = generateValue(state, dispatch);

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
