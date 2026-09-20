import { CircleCheck, Users } from 'lucide-react';
import { Icon } from '@woldui/react/components/atoms/icon';

export default function IconLabels() {
	return (
		<div className="flex flex-col gap-4 text-sm">
			{/* Decorative: the text beside it already says "Team". */}
			<span className="flex items-center gap-2">
				<Icon icon={Users} label={null} />
				Team
			</span>
			{/* Meaningful: nothing else says the sync succeeded. */}
			<span className="flex items-center gap-2">
				Last sync
				<Icon icon={CircleCheck} label="Succeeded" className="text-success-text" />
			</span>
		</div>
	);
}
