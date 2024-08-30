import preview from '@assets/projects/expenses-tracker/preview.png';
import mobilePreview1 from '@assets/projects/expenses-tracker/mobile-preview1.png';
import mobilePreview2 from '@assets/projects/expenses-tracker/mobile-preview2.png';

const expensesTracker = {
	context: 'expensesTracker',
	name: 'Expenses tracker',
	year: '2023',
	type: 'Frontend web application',
	description:
		'It is designed to help users efficiently manage and monitor their personal expenses. It features a user-friendly interface that allows users to easily add, edit, and delete expenses while categorizing them for better organization.',
	features: [
		{
			label: 'Dynamic categorization',
			description:
				'Users can effortlessly assign expenses to a variety of predefined categories, making it easy to organize and track spending.',
		},
		{
			label: 'Interactive visualizations',
			description:
				'The application includes dynamic charts that visually represent monthly expenditures, helping users quickly identify spending patterns and trends.',
		},
		{
			label: 'Flexible filtering',
			description:
				'Users can filter expenses by year or month, which are then displayed in descending order for easy navigation through their financial history.',
		},
		{
			label: 'Robust form validation',
			description:
				'The app features comprehensive form validation to ensure data accuracy, providing users with clear guidance when entering information.',
		},
	],
	summaryNote:
		'This application offers a seamless experience for anyone looking to gain better control over their finances, providing insightful data through its intuitive design and powerful features.',
	links: [
		{
			label: 'Demo',
			url: 'https://nicopuegher.github.io/expenses-tracker/',
			description: 'Live application',
		},
		{
			label: 'Source',
			url: 'https://github.com/nicoPuegher/expenses-tracker/',
			description: 'Repository',
		},
	],
	techStack: [
		'HTML',
		'Tailwind CSS',
		'JavaScript',
		'React',
		'Headless UI',
		'Material UI',
		'Heroicons',
		'Day.js',
		'Lodash',
		'PropTypes',
		'Prettier',
		'ESLint',
		'Vite',
	],
	imageFallback: 'Loading image...',
	previewImage: preview,
	mobilePreviews: [mobilePreview1, mobilePreview2],
};

export default expensesTracker;
