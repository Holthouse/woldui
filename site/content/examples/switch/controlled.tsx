'use client';

import * as React from 'react';
import { Label } from '@woldui/react/components/ui/label';
import { Switch } from '@woldui/react/components/ui/switch';

export default function SwitchControlled() {
	const [autoSave, setAutoSave] = React.useState(true);

	return (
		<div className="flex flex-col items-center gap-3">
			<div className="flex items-center gap-3">
				<Switch id="switch-autosave" checked={autoSave} onCheckedChange={setAutoSave} />
				<Label htmlFor="switch-autosave">Auto-save drafts</Label>
			</div>
			<p className="text-xs text-muted-foreground">
				{autoSave ? 'Drafts save as you type.' : 'Drafts save only when you press Save.'}
			</p>
		</div>
	);
}
