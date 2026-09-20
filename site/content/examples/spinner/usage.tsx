import { Spinner } from '@woldui/react/components/ui/spinner';

export default function SpinnerUsage() {
	return (
		<div className="flex items-center gap-4">
			<Spinner className="size-4" />
			<Spinner className="size-6" />
			<Spinner className="size-8 text-primary" />
		</div>
	);
}
