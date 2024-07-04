import { Button } from '@/components/ui/button/index.js';

import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

export default function ThemeButton() {
	const moon = <Moon className="h-4 w-4" />;
	const sun = <Sun className="h-4 w-4" />;

	return (
		<Button variant="outline" size="icon">
			{moon}
		</Button>
	);
}
