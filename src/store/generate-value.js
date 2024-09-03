import changePage from './handler';

export default function generateValue(state, dispatch) {
	return {
		page: state.page,
		handleChangePage: (page) => changePage(dispatch, page),
	};
}
