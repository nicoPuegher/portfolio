import React, { useContext } from 'react';

import Context from '@/store/context';
import Section from '@/layouts/section';

export default function Sorting() {
	const context = useContext(Context);

	return <Section title="Sorting Visualizer">Sorting</Section>;
}
