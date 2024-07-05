import { createContext } from 'react';

export const Context = createContext({
	theme: '',
	page: '',
	handleChangeTheme: () => {},
	handleChangePage: () => {},
});
