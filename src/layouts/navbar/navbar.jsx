import Logo from './logo.jsx';
import Menu from './menu.jsx';
import ThemeButton from './themebutton.jsx';

export default function Navbar() {
	return (
		<header className="fixed top-0 w-full">
			<nav className="mx-auto flex max-w-3xl justify-between py-2">
				<Logo />
				<Menu />
				<ThemeButton />
			</nav>
		</header>
	);
}
