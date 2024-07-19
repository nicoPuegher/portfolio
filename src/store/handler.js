export default function changePage(dispatch, page) {
	dispatch({
		type: 'page_change',
		payload: page,
	});
}
