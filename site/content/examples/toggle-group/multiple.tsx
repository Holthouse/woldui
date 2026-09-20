import { Bold, Italic, Underline } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@woldui/react/components/ui/toggle-group';

export default function ToggleGroupMultiple() {
	return (
		<ToggleGroup type="multiple" defaultValue={['bold']} aria-label="Text formatting">
			<ToggleGroupItem value="bold" aria-label="Bold">
				<Bold aria-hidden />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Italic">
				<Italic aria-hidden />
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Underline">
				<Underline aria-hidden />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
