import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
} from '@/components/ui/dropdownMenu.jsx';

import Button from '@/components/ui/button/button.jsx';

import { Menu } from 'lucide-react';

export default function mobileMenuButtons() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className="ml-2 md:hidden"
					variant="outline"
					size="icon"
				>
					<Menu className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40">
				<DropdownMenuGroup>
					<DropdownMenuItem>About</DropdownMenuItem>
					<DropdownMenuItem>Works</DropdownMenuItem>
					<DropdownMenuItem>Linkedin</DropdownMenuItem>
					<DropdownMenuItem>Github</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
