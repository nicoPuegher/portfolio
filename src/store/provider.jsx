import { useReducer } from 'react';

import reducer from './reducer.js';
import { Context } from './context.js';
import generateValue from './generateValue.js';

import PropTypes from 'prop-types';

export default function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		theme: 'light',
		page: 'home',
	});

	const value = generateValue(state, dispatch);

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
