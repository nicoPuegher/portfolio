import sortingThumbnail from '@/assets/sorting/sorting.png';
import trackyThumbnail from '@/assets/tracky/tracky.png';

const works = {
	sorting: {
		title: 'Sorting Visualizer',
		description:
			'Frontend web application that animates the sorting process of various algorithms, offering an engaging way to explore and understand how these algorithms operate.',
		src: { sortingThumbnail },
		fallback: 'Loading image ...',
	},
	tracky: {
		title: 'Tracky',
		description:
			'Frontend web application designed to efficiently track and manage your expenses.',
		src: { trackyThumbnail },
		fallback: 'Loading image ...',
	},
};

export default works;
