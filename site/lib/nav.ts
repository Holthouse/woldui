/**
 * The site's navigation: one list, read by the top nav, the docs sidebar and the "next /
 * previous" links. A page that is not listed here is unreachable from the UI, so adding a
 * component page means adding it here too.
 */

type NavItem = {
	title: string;
	href: string;
	/** Marks the pages written in depth (several examples), shown with a subtle dot. */
	flagship?: boolean;
};

export type NavGroup = { title: string; items: NavItem[] };

const component = (slug: string, title: string, flagship = false): NavItem => ({
	title,
	href: `/docs/components/${slug}/`,
	flagship
});

export const nav: NavGroup[] = [
	{
		title: 'Getting started',
		items: [
			{ title: 'Introduction', href: '/docs/' },
			{ title: 'Installation', href: '/docs/installation/' },
			{ title: 'Theming', href: '/docs/theming/' },
			{ title: 'Dark mode', href: '/docs/dark-mode/' },
			{ title: 'Motion', href: '/docs/motion/', flagship: true },
			{ title: 'Accessibility', href: '/docs/accessibility/' }
		]
	},
	{
		title: 'Atoms',
		items: [
			{ title: 'Layout', href: '/docs/atoms/layout/' },
			{ title: 'Typography', href: '/docs/atoms/typography/' },
			{ title: 'Icon', href: '/docs/atoms/icon/' },
			{ title: 'Field', href: '/docs/atoms/field/', flagship: true }
		]
	},
	{
		title: 'Forms',
		items: [
			component('button', 'Button', true),
			component('button-group', 'Button Group'),
			component('calendar', 'Calendar'),
			component('checkbox', 'Checkbox'),
			component('field', 'Field Layout'),
			component('input', 'Input', true),
			component('input-group', 'Input Group'),
			component('input-otp', 'Input OTP'),
			component('label', 'Label'),
			component('native-select', 'Native Select'),
			component('radio-group', 'Radio Group'),
			component('select', 'Select', true),
			component('slider', 'Slider'),
			component('switch', 'Switch', true),
			component('textarea', 'Textarea'),
			component('toggle', 'Toggle'),
			component('toggle-group', 'Toggle Group')
		]
	},
	{
		title: 'Data display',
		items: [
			component('accordion', 'Accordion'),
			component('aspect-ratio', 'Aspect Ratio'),
			component('attachment', 'Attachment'),
			component('avatar', 'Avatar'),
			component('badge', 'Badge', true),
			component('bubble', 'Bubble'),
			component('card', 'Card', true),
			component('carousel', 'Carousel'),
			component('collapsible', 'Collapsible'),
			component('item', 'Item'),
			component('kbd', 'Kbd'),
			component('marker', 'Marker'),
			component('message', 'Message'),
			component('resizable', 'Resizable'),
			component('scroll-area', 'Scroll Area'),
			component('separator', 'Separator'),
			component('table', 'Table')
		]
	},
	{
		title: 'Navigation & feedback',
		items: [
			component('alert', 'Alert', true),
			component('breadcrumb', 'Breadcrumb'),
			component('empty', 'Empty'),
			component('navigation-menu', 'Navigation Menu'),
			component('pagination', 'Pagination'),
			component('progress', 'Progress'),
			component('sidebar', 'Sidebar'),
			component('skeleton', 'Skeleton'),
			component('sonner', 'Toast (Sonner)', true),
			component('spinner', 'Spinner'),
			component('tabs', 'Tabs', true)
		]
	},
	{
		title: 'Overlays',
		items: [
			component('alert-dialog', 'Alert Dialog'),
			component('command', 'Command'),
			component('context-menu', 'Context Menu'),
			component('dialog', 'Dialog', true),
			component('drawer', 'Drawer'),
			component('dropdown-menu', 'Dropdown Menu'),
			component('hover-card', 'Hover Card'),
			component('menubar', 'Menubar'),
			component('popover', 'Popover'),
			component('sheet', 'Sheet'),
			component('tooltip', 'Tooltip')
		]
	},
	{
		title: 'Specialised',
		items: [
			component('chart', 'Chart'),
			component('combobox', 'Combobox'),
			component('direction', 'Direction Provider'),
			component('message-scroller', 'Message Scroller'),
			component('questionnaire', 'Questionnaire')
		]
	}
];

const allPages = nav.flatMap((g) => g.items);

/** The page before and after `href`, in sidebar order. */
export function neighbours(href: string) {
	const i = allPages.findIndex((p) => p.href === href);
	return { previous: i > 0 ? allPages[i - 1] : undefined, next: allPages[i + 1] };
}

export const links = {
	github: 'https://github.com/Holthouse/woldui',
	npm: 'https://www.npmjs.com/package/@woldui/react',
	source: (path: string) => `https://github.com/Holthouse/woldui/blob/main/src/${path}.tsx`
};
