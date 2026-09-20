import { Label } from '@woldui/react/components/ui/label';
import {
	NativeSelect,
	NativeSelectOptGroup,
	NativeSelectOption
} from '@woldui/react/components/ui/native-select';

export default function NativeSelectUsage() {
	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor="native-select-timezone">Time zone</Label>
			<NativeSelect id="native-select-timezone" defaultValue="europe-berlin">
				<NativeSelectOptGroup label="Europe">
					<NativeSelectOption value="europe-london">London</NativeSelectOption>
					<NativeSelectOption value="europe-berlin">Berlin</NativeSelectOption>
				</NativeSelectOptGroup>
				<NativeSelectOptGroup label="Americas">
					<NativeSelectOption value="america-new-york">New York</NativeSelectOption>
					<NativeSelectOption value="america-los-angeles">Los Angeles</NativeSelectOption>
				</NativeSelectOptGroup>
			</NativeSelect>
		</div>
	);
}
