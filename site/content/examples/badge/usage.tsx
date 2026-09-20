import { Badge } from '@woldui/react/components/ui/badge';

export default function BadgeUsage() {
	return (
		<div className="flex items-center gap-2">
			<span className="text-sm font-medium">Release notes</span>
			<Badge>New</Badge>
		</div>
	);
}
