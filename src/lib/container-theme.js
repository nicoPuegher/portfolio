import { defineStyleConfig } from '@chakra-ui/react';

const Container = defineStyleConfig({
	baseStyles: {
		maxW: 'container.md',
	},
	variants: {
		wrapper: {
			p: 2,
		},
		content: {
			px: 2,
			py: 10,
		},
	},
	defaultProps: {
		variant: 'wrapper',
	},
});

export default Container;
