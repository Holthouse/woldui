'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import { cn } from '@woldui/react/lib/utils';

export function CopyButton({ value, className }: { value: string; className?: string }) {
	const [copied, setCopied] = React.useState(false);

	React.useEffect(() => {
		if (!copied) return;
		const t = setTimeout(() => setCopied(false), 1600);
		return () => clearTimeout(t);
	}, [copied]);

	return (
		<Button
			type="button"
			variant="light"
			tone="default"
			size="icon-sm"
			disableRipple
			className={cn('text-muted-foreground', className)}
			aria-label={copied ? 'Copied' : 'Copy code'}
			onClick={async () => {
				await navigator.clipboard.writeText(value);
				setCopied(true);
			}}
		>
			{copied ? <Check aria-hidden /> : <Copy aria-hidden />}
		</Button>
	);
}
