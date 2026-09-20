import { Bold, Italic, Underline } from 'lucide-react';
import { Toggle } from '@woldui/react/components/ui/toggle';

export default function ToggleUsage() {
	return (
		<div className="flex gap-1">
			<Toggle aria-label="Bold">
				<Bold aria-hidden />
			</Toggle>
			<Toggle aria-label="Italic" defaultPressed>
				<Italic aria-hidden />
			</Toggle>
			<Toggle aria-label="Underline" disabled>
				<Underline aria-hidden />
			</Toggle>
		</div>
	);
}
