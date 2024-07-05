export default function reducer(state, action) {
	const newState = { ...state };

	if (action.type === 'theme_change') {
		newState.theme = action.payload;
	}

	if (action.type === 'page_change') {
		newState.page = action.payload;
	}

	return newState;
}
