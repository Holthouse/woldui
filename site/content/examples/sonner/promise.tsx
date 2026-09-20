'use client';

import { toast } from 'sonner';
import { Button } from '@woldui/react/components/ui/button';

function uploadReport() {
	return new Promise<string>((resolve) => setTimeout(() => resolve('report.pdf'), 1500));
}

export default function SonnerPromise() {
	return (
		<Button
			variant="bordered"
			onClick={() =>
				toast.promise(uploadReport(), {
					loading: 'Uploading…',
					success: (file) => `${file} uploaded`,
					error: 'Upload failed'
				})
			}
		>
			Upload report
		</Button>
	);
}
