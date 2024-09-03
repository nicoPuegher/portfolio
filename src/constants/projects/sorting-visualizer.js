import preview from '@assets/projects/sorting-visualizer/preview.png';
import mobilePreview1 from '@assets/projects/sorting-visualizer/mobile-preview1.png';
import mobilePreview2 from '@assets/projects/sorting-visualizer/mobile-preview2.png';

const sortingVisualizer = {
	context: 'sortingVisualizer',
	name: 'Sorting visualizer',
	year: '2024',
	type: 'Frontend web application',
	description:
		'It animates the sorting process of various algorithms, offering an engaging way to explore and understand how these algorithms work. This project demystifies complex computational concepts and brings them to life in an interactive format.',
	features: [
		{
			label: 'Algorithm visualization',
			description:
				'Experience the sorting process step by step with animated representations, allowing users to observe how each algorithm functions.',
		},
		{
			label: 'Adjustable parameters',
			description:
				'Users can modify sorting speed and chart size, tailoring the experience to their preferences and learning pace.',
		},
		{
			label: 'Educational insight',
			description:
				'The application serves as an educational platform for those curious about sorting algorithms, making complex ideas accessible and understandable.',
		},
	],
	summaryNote:
		'This project is ideal for students, educators, and anyone interested in computer science, offering a dynamic and interactive way to explore fundamental algorithms.',
	links: [
		{
			label: 'Demo',
			url: 'https://nicopuegher.github.io/sorting-visualizer/',
			description: 'Live application',
		},
		{
			label: 'Source',
			url: 'https://github.com/nicoPuegher/sorting-visualizer/',
			description: 'Repository',
		},
	],
	techStack: [
		'HTML',
		'CSS',
		'JavaScript',
		'React',
		'PropTypes',
		'Prettier',
		'ESLint',
		'Vite',
	],
	imageFallback: 'Loading image...',
	previewImage: preview,
	mobilePreviews: [mobilePreview1, mobilePreview2],
};

export default sortingVisualizer;
