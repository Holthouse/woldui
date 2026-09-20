import { Bell } from 'lucide-react';
import { Icon } from '@woldui/react/components/atoms/icon';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;

export default function IconUsage() {
	return (
		<div className="flex items-end gap-6">
			{sizes.map((size) => (
				<div key={size} className="flex flex-col items-center gap-2">
					<Icon icon={Bell} label={null} size={size} />
					<code className="text-xs text-muted-foreground">{size}</code>
				</div>
			))}
		</div>
	);
}
