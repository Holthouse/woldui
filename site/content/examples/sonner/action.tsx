'use client';

import { toast } from 'sonner';
import { Button } from '@woldui/react/components/ui/button';

export default function SonnerAction() {
	function archive() {
		toast('Project archived', {
			description: 'Website redesign is now read-only.',
			action: {
				label: 'Undo',
				onClick: () => toast.success('Project restored')
			}
		});
	}

	return (
		<Button variant="bordered" onClick={archive}>
			Archive project
		</Button>
	);
}
