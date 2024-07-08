import { useContext } from 'react';

import { Context } from '@/store/context.js';

import { Button } from '@/components/ui/button/index.js';

import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

export default function ThemeButton() {
	const context = useContext(Context);

	const moon = <Moon className="h-4 w-4" />;
	const sun = <Sun className="h-4 w-4" />;

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => context.handleChangeTheme(context.theme)}
		>
			{context.theme === 'light' ? moon : sun}
		</Button>
	);
}
