import Logo from './logo.jsx';
import MenuButtons from './menuButtons.jsx';
import ThemeButton from './themeButton.jsx';
import MobileMenuButtons from './mobileMenuButtons.jsx';

export default function Navbar() {
	return (
		<header className="fixed top-0 w-full">
			<nav className="mx-auto flex max-w-3xl justify-between py-2">
				<Logo />
				<MenuButtons />
				<div>
					<ThemeButton />
					<MobileMenuButtons />
				</div>
			</nav>
		</header>
	);
}
