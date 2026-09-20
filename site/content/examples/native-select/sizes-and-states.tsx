import { NativeSelect, NativeSelectOption } from '@woldui/react/components/ui/native-select';

export default function NativeSelectSizesAndStates() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<NativeSelect size="sm" aria-label="Sort order, small" defaultValue="newest">
				<NativeSelectOption value="newest">Newest</NativeSelectOption>
				<NativeSelectOption value="oldest">Oldest</NativeSelectOption>
			</NativeSelect>
			<NativeSelect aria-label="Sort order" defaultValue="newest">
				<NativeSelectOption value="newest">Newest</NativeSelectOption>
				<NativeSelectOption value="oldest">Oldest</NativeSelectOption>
			</NativeSelect>
			<NativeSelect aria-label="Sort order, disabled" defaultValue="newest" disabled>
				<NativeSelectOption value="newest">Newest</NativeSelectOption>
			</NativeSelect>
			<NativeSelect aria-label="Status" aria-invalid defaultValue="">
				<NativeSelectOption value="" disabled>
					Pick a status
				</NativeSelectOption>
				<NativeSelectOption value="open">Open</NativeSelectOption>
			</NativeSelect>
		</div>
	);
}
