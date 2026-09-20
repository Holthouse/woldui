'use client';

import { toast } from 'sonner';
import { Button } from '@woldui/react/components/ui/button';

export default function SonnerTypes() {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			<Button variant="flat" tone="success" onClick={() => toast.success('Invitation sent')}>
				Success
			</Button>
			<Button
				variant="flat"
				tone="primary"
				onClick={() => toast.info('A new version is available')}
			>
				Info
			</Button>
			<Button
				variant="flat"
				tone="warning"
				onClick={() => toast.warning('Your trial ends in 3 days')}
			>
				Warning
			</Button>
			<Button
				variant="flat"
				tone="danger"
				onClick={() => toast.error('Could not reach the server')}
			>
				Error
			</Button>
		</div>
	);
}
