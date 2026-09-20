'use client';

import * as React from 'react';
import { Label } from '@woldui/react/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@woldui/react/components/ui/select';

const themes = { light: 'Light', dark: 'Dark', system: 'Match system' };

export default function SelectControlled() {
	const [theme, setTheme] = React.useState<keyof typeof themes>('system');

	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor="select-theme">Theme</Label>
			<Select value={theme} onValueChange={(value) => setTheme(value as keyof typeof themes)}>
				<SelectTrigger id="select-theme" className="w-48">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{Object.entries(themes).map(([value, label]) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<p className="text-xs text-muted-foreground">Current theme: {themes[theme]}</p>
		</div>
	);
}
