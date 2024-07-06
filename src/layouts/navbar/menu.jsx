import { useContext } from 'react';

import { Context } from '@/store/context.js';

import { Button } from '@/components/ui/button/index.js';

export default function Menu() {
	const context = useContext(Context);

	return (
		<div className="inline-flex gap-2">
			<Button
				variant="ghost"
				onClick={() => context.handleChangePage('about')}
			>
				About
			</Button>
			<Button variant="ghost">Works</Button>
			<Button variant="ghost">Linkedin</Button>
			<Button variant="ghost">Github</Button>
		</div>
	);
}
