import { useEffect } from 'react';

export default function useDynamicMargin() {
	useEffect(() => {
		const header = document.querySelector('header');
		const main = document.querySelector('main');

		function updateMainMargin() {
			const headerHeight = header.offsetHeight;
			main.style.marginTop = `${headerHeight}px`;
		}

		updateMainMargin();

		window.addEventListener('resize', updateMainMargin);
		return () => window.removeEventListener('resize', updateMainMargin);
	}, []);
}
