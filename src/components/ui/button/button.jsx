import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils.js';

import { buttonVariants } from './buttonVariants.js';

import PropTypes from 'prop-types';

const Button = React.forwardRef(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = 'Button';

Button.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.string,
	size: PropTypes.string,
	asChild: PropTypes.bool,
};

export default Button;
