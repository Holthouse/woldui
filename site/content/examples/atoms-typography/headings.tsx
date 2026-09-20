import { Heading, Muted } from '@woldui/react/components/atoms/typography';

export default function TypographyHeadings() {
	return (
		<div className="flex flex-col gap-3">
			{/* The level is the outline; the size is only how it looks. */}
			<Heading level={3} size="2xl">
				An h3 set large
			</Heading>
			<Heading level={2} size="sm">
				An h2 set small
			</Heading>
			<Muted>Without `size`, each level takes its own size from the scale.</Muted>
		</div>
	);
}
