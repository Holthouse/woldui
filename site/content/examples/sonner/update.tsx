'use client';

import { toast } from 'sonner';
import { Button } from '@woldui/react/components/ui/button';

export default function SonnerUpdate() {
	function sync() {
		// Passing the same id replaces the toast in place instead of stacking a new one.
		const id = toast.loading('Syncing 12 files…');
		setTimeout(() => toast.success('All files are up to date', { id }), 1500);
	}

	return (
		<Button variant="bordered" onClick={sync}>
			Sync now
		</Button>
	);
}
