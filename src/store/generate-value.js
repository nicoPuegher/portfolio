import changePage from '@store/handler';

export default function generateValue(state, dispatch) {
	return {
		page: state.page,
		handleChangePage: (page) => changePage(dispatch, page),
	};
}
