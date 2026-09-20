'use client';

import * as React from 'react';
import { Button } from '@woldui/react/components/ui/button';
import { Spinner } from '@woldui/react/components/ui/spinner';

export default function ButtonStates() {
	const [saving, setSaving] = React.useState(false);

	function save() {
		setSaving(true);
		setTimeout(() => setSaving(false), 1500);
	}

	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button onClick={save} disabled={saving} aria-busy={saving}>
				{saving && <Spinner aria-hidden />}
				{saving ? 'Saving…' : 'Save'}
			</Button>
			<Button disabled>Disabled</Button>
			<Button disableRipple variant="bordered">
				No ripple
			</Button>
		</div>
	);
}
