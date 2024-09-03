import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import Context from './context';
import reducer from './reducer';
import generateValue from './generate-value';

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
