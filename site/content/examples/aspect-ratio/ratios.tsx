import { AspectRatio } from '@woldui/react/components/ui/aspect-ratio';

const ratios = [
	{ label: '1 / 1', value: 1 },
	{ label: '4 / 3', value: 4 / 3 },
	{ label: '21 / 9', value: 21 / 9 }
];

export default function AspectRatioRatios() {
	return (
		<div className="grid w-full max-w-xl grid-cols-3 items-start gap-4">
			{ratios.map((ratio) => (
				<AspectRatio
					key={ratio.label}
					ratio={ratio.value}
					className="flex items-center justify-center rounded-lg border border-border bg-content2"
				>
					<span className="text-xs text-muted-foreground">{ratio.label}</span>
				</AspectRatio>
			))}
		</div>
	);
}
