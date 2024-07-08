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
			<Button
				variant="ghost"
				onClick={() => context.handleChangePage('works')}
			>
				Works
			</Button>
			<Button variant="ghost">
				<a
					href="https://www.linkedin.com/in/nicolas-puegher/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Linkedin
				</a>
			</Button>
			<Button variant="ghost">
				<a
					href="https://github.com/nicoPuegher"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
			</Button>
		</div>
	);
}
