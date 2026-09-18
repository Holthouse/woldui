/*
 * Tabs, single quotes, 100 columns, and Tailwind classes sorted against the theme.
 */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindStylesheet: './src/styles/globals.css'
};

export default config;
