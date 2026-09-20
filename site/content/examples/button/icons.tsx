import { ArrowRight, Heart, Plus, Trash2 } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';

export default function ButtonIcons() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button>
				<Plus aria-hidden /> New project
			</Button>
			<Button variant="flat" tone="secondary">
				Continue <ArrowRight aria-hidden />
			</Button>
			{/* An icon-only button needs a name of its own. */}
			<Button size="icon" variant="flat" tone="danger" aria-label="Delete">
				<Trash2 aria-hidden />
			</Button>
			<Button size="icon-sm" variant="light" tone="danger" aria-label="Like">
				<Heart aria-hidden />
			</Button>
		</div>
	);
}
