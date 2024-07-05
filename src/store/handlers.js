export function changeTheme(dispatch, theme) {
	dispatch({
		type: 'theme_change',
		payload: theme,
	});
}

export function changePage(dispatch, page) {
	dispatch({
		type: 'page_change',
		payload: page,
	});
}
