export default function reducer(state, action) {
	const newState = { ...state };

	if (action.type === 'theme_change') {
		if (action.payload === 'light') {
			newState.theme = 'dark';
		} else {
			newState.theme = 'light';
		}
	}

	if (action.type === 'page_change') {
		newState.page = action.payload;
	}

	return newState;
}
