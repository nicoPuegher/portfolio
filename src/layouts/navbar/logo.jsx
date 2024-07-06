import { useContext } from 'react';

import { Context } from '@/store/context';

import { Button } from '@/components/ui/button/index.js';

export default function Logo() {
	const context = useContext(Context);

	return (
		<Button
			className="pl-0 text-base font-semibold"
			variant="link"
			onClick={() => context.handleChangePage('home')}
		>
			Nicolas Puegher
		</Button>
	);
}
