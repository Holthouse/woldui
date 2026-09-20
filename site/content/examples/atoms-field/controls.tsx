'use client'; // Field's children is a function, which only a client component can pass.

import { Field } from '@woldui/react/components/atoms/field';
import { Input } from '@woldui/react/components/ui/input';
import { NativeSelect, NativeSelectOption } from '@woldui/react/components/ui/native-select';

export default function FieldControls() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Field label="Default role" description="New members join with this role.">
				{(props) => (
					<NativeSelect {...props} defaultValue="viewer">
						<NativeSelectOption value="viewer">Viewer</NativeSelectOption>
						<NativeSelectOption value="editor">Editor</NativeSelectOption>
						<NativeSelectOption value="owner">Owner</NativeSelectOption>
					</NativeSelect>
				)}
			</Field>
			<Field label="Workspace id" description="Set when the workspace was created.">
				{(props) => <Input {...props} disabled readOnly value="ws_4k9d2" />}
			</Field>
		</div>
	);
}
