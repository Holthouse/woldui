import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@woldui/react/components/ui/toggle-group';

export default function ToggleGroupAttached() {
	return (
		<ToggleGroup
			type="single"
			defaultValue="left"
			variant="outline"
			spacing={0}
			aria-label="Text alignment"
		>
			<ToggleGroupItem value="left" aria-label="Align left">
				<AlignLeft aria-hidden />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<AlignCenter aria-hidden />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right">
				<AlignRight aria-hidden />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
