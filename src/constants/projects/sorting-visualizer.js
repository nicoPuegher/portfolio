import preview from '@assets/projects/sorting-visualizer/preview.png';
import mobilePreview1 from '@assets/projects/sorting-visualizer/mobile-preview1.png';
import mobilePreview2 from '@assets/projects/sorting-visualizer/mobile-preview2.png';

const sortingVisualizer = {
	title: 'Sorting Visualizer',
	year: '2024',
	description:
		'Frontend web application that animates the sorting process of various algorithms, offering an engaging way to explore and understand how these algorithms operate. This project demystifies complex computational concepts and brings them to life in an engaging format.',
	features: [
		{
			title: 'Algorithm Visualization: ',
			content:
				'Experience the sorting process step-by-step with animated representations, allowing users to see how each algorithm operates.',
		},
		{
			title: 'Adjustable Parameters: ',
			content:
				'Users can modify the sorting speed and chart size, tailoring the experience to their preferences and learning pace.',
		},
		{
			title: 'Educational Insight: ',
			content:
				'The application provides an educational platform for those curious about sorting algorithms, making complex ideas accessible and understandable.',
		},
	],
	closer: 'This project is ideal for students, educators, and anyone interested in computer science, offering a dynamic and interactive way to explore fundamental algorithms.',
	link: 'sorting-visualizer',
	stack: [
		'HTML5',
		'CSS3',
		'JavaScript',
		'React',
		'Proptypes',
		'Prettier',
		'ESLint',
		'Vite',
	],
	fallback: 'Loading image...',
	preview,
	mobilePreviews: [mobilePreview1, mobilePreview2],
};

export default sortingVisualizer;
