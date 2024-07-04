import { Button } from '@/components/ui/button/index.js';

export default function Menu() {
	return (
		<div className="inline-flex gap-2">
			<Button variant="ghost">About</Button>
			<Button variant="ghost">Works</Button>
			<Button variant="ghost">Linkedin</Button>
			<Button variant="ghost">Github</Button>
		</div>
	);
}
