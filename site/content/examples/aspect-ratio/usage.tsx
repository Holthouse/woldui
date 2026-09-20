import { AspectRatio } from '@woldui/react/components/ui/aspect-ratio';

export default function AspectRatioUsage() {
	return (
		<div className="w-full max-w-md">
			<AspectRatio
				ratio={16 / 9}
				className="flex items-end overflow-hidden rounded-lg bg-linear-to-br from-primary-600 to-secondary-600 p-4"
			>
				<span className="text-sm font-medium text-primary-foreground">Project cover, 16 / 9</span>
			</AspectRatio>
		</div>
	);
}
