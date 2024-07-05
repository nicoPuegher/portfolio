import { changeTheme, changePage } from './handlers.js';

export default function generateValue(state, dispatch) {
	return {
		theme: state.theme,
		page: state.page,
		handleChangeTheme: (theme) => changeTheme(dispatch, theme),
		handleChangePage: (page) => changePage(dispatch, page),
	};
}
