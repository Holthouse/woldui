import { CircleCheck, CircleDashed, CircleX, Clock, Loader } from 'lucide-react';
import { Badge } from '@woldui/react/components/ui/badge';

export default function BadgeStatus() {
	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			<Badge variant="secondary">
				<CircleDashed data-icon="inline-start" aria-hidden /> Draft
			</Badge>
			<Badge variant="primary">
				<Loader data-icon="inline-start" aria-hidden /> In progress
			</Badge>
			<Badge variant="warning">
				<Clock data-icon="inline-start" aria-hidden /> Pending review
			</Badge>
			<Badge variant="success">
				<CircleCheck data-icon="inline-start" aria-hidden /> Shipped
			</Badge>
			<Badge variant="destructive">
				<CircleX data-icon="inline-start" aria-hidden /> Failed
			</Badge>
		</div>
	);
}
