export default function reducer(state, action) {
	const newState = { ...state };

	if (action.type === 'page_change') {
		newState.page = action.payload;
	}

	return newState;
}
