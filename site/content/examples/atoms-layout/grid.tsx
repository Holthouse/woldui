import { Grid } from '@woldui/react/components/atoms/layout';

const projects = [
	'Roadmap',
	'Design review',
	'Hiring',
	'Launch plan',
	'Research',
	'Docs',
	'Support'
];

export default function LayoutGrid() {
	return (
		// Resize the window: the columns reflow with no breakpoints.
		<Grid min="10rem" gap="sm" className="w-full">
			{projects.map((project) => (
				<div
					key={project}
					className="rounded-md bg-secondary px-3 py-6 text-center text-xs text-secondary-foreground"
				>
					{project}
				</div>
			))}
		</Grid>
	);
}
