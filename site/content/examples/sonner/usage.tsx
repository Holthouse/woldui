'use client';

// The toast API comes from sonner itself. <Toaster /> is mounted once near the app root.
import { toast } from 'sonner';
import { Button } from '@woldui/react/components/ui/button';

export default function SonnerUsage() {
	return (
		<Button variant="bordered" onClick={() => toast('Project created')}>
			Show a toast
		</Button>
	);
}
