'use client';

import * as React from 'react';
import {
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxItem,
	ComboboxList,
	ComboboxValue,
	useComboboxAnchor
} from '@woldui/react/components/ui/combobox';

const labels = ['Bug', 'Feature', 'Design', 'Docs', 'Performance', 'Security'];

export default function ComboboxMultiple() {
	const anchor = useComboboxAnchor();

	return (
		<Combobox multiple items={labels} defaultValue={['Design']}>
			<ComboboxChips ref={anchor} className="w-full max-w-xs">
				<ComboboxValue>
					{(values: string[]) => (
						<React.Fragment>
							{values.map((value) => (
								<ComboboxChip key={value}>{value}</ComboboxChip>
							))}
							<ComboboxChipsInput placeholder="Add a label" aria-label="Labels" />
						</React.Fragment>
					)}
				</ComboboxValue>
			</ComboboxChips>
			<ComboboxContent anchor={anchor}>
				<ComboboxEmpty>No label found.</ComboboxEmpty>
				<ComboboxList>
					{(label: string) => (
						<ComboboxItem key={label} value={label}>
							{label}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	);
}
