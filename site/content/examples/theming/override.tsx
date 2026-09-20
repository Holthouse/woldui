'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import { Badge } from '@woldui/react/components/ui/badge';
import { Switch } from '@woldui/react/components/ui/switch';

const palettes = {
	Default: {},
	Violet: {
		'--primary': '#7c3aed',
		'--primary-50': '#f5f0ff',
		'--primary-100': '#ede4ff',
		'--primary-700': '#5b21b6',
		'--radius': '0.875rem'
	},
	Square: { '--radius': '0.25rem' }
} as const;

export default function ThemeOverride() {
	const [name, setName] = React.useState<keyof typeof palettes>('Violet');

	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex gap-2">
				{Object.keys(palettes).map((p) => (
					<Button
						key={p}
						size="sm"
						variant={p === name ? 'solid' : 'bordered'}
						tone="default"
						onClick={() => setName(p as keyof typeof palettes)}
					>
						{p}
					</Button>
				))}
			</div>
			{/* Variables set on a wrapper retheme everything inside it. */}
			<div style={palettes[name] as React.CSSProperties} className="flex items-center gap-3">
				<Button>Primary</Button>
				<Button variant="flat">Flat</Button>
				<Badge variant="primary">New</Badge>
				<Switch defaultChecked aria-label="Example switch" />
			</div>
		</div>
	);
}
