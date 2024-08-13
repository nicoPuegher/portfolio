import preview from '@assets/projects/expenses-tracker/preview.png';
import mobilePreview1 from '@assets/projects/sorting-visualizer/mobile-preview1.png';
import mobilePreview2 from '@assets/projects/sorting-visualizer/mobile-preview2.png';

const expensesTracker = {
	title: 'Expenses Tracker',
	year: '2023',
	description:
		'Frontend web application designed to help users efficiently manage and monitor their personal expenses. It features a user-friendly interface that allows users to add, edit, and delete expenses while categorizing them for better organization.',
	features: [
		{
			title: 'Dynamic Categorization: ',
			content:
				'Users can easily assign expenses to a variety of predefined categories.',
		},
		{
			title: 'Interactive Visualizations: ',
			content:
				'The application features dynamic charts that visually represent monthly expenditures, enabling users to quickly identify spending patterns and trends.',
		},
		{
			title: 'Flexible Filtering: ',
			content:
				'Expenses can be filtered by year or month and are displayed in descending order, allowing users to effortlessly navigate their financial history.',
		},
		{
			title: 'Robust Form Validation: ',
			content:
				'The app includes comprehensive form validation to ensure data accuracy, providing users with clear guidance when entering information.',
		},
	],
	closer: 'This application offers a seamless experience for users looking to gain better control over their finances, providing insightful data through its intuitive design and powerful features.',
	link: 'expenses-tracker',
	stack: [
		'HTML5',
		'Tailwind CSS',
		'JavaScript',
		'React',
		'Heroicons',
		'Headless UI',
		'Material UI',
		'Day',
		'Lodash',
		'PropTypes',
		'Prettier',
		'ESLint',
		'Vite',
	],
	fallback: 'Loading image...',
	preview,
	mobilePreviews: [mobilePreview1, mobilePreview2],
};

export default expensesTracker;
