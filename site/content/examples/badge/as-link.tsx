import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@woldui/react/components/ui/badge';

export default function BadgeAsLink() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge asChild variant="primary">
				<a href="#variants">
					Design system <ArrowUpRight data-icon="inline-end" aria-hidden />
				</a>
			</Badge>
			<Badge asChild variant="outline">
				<a href="#accessibility">Accessibility</a>
			</Badge>
		</div>
	);
}
