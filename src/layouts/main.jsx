import React, { useContext } from 'react';

import Context from '@store/context';
import CustomContainer from '@/components/ui/custom-container';
import Home from '@pages/home';
import About from '@pages/about';
import Works from '@pages/works';
import SortingVisualizer from '@/pages/works/sorting-visualizer';
import ExpensesTracker from '@/pages/works/expenses-tracker';

export default function Main() {
	const context = useContext(Context);

	return (
		<CustomContainer
			as="main"
			variant="content"
			display="flex"
			flexDirection="column"
			flexGrow={1}
		>
			{context.page === 'home' && <Home />}
			{context.page === 'about' && <About />}
			{context.page === 'works' && <Works />}
			{context.page === 'sortingVisualizer' && <SortingVisualizer />}
			{context.page === 'expensesTracker' && <ExpensesTracker />}
		</CustomContainer>
	);
}
