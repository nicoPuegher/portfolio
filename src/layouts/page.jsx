import { useContext } from 'react';

import { Context } from '@/store/context.js';

export default function Page() {
	const context = useContext(Context);

	return (
		<main className="mx-auto max-w-3xl flex-1 bg-red-50">
			{context.page === 'home' && <span>Home</span>}
			{context.page === 'about' && <span>About</span>}
			{context.page === 'works' && <span>Works</span>}
		</main>
	);
}
