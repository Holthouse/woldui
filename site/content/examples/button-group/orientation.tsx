import { Minus, Plus } from 'lucide-react';
import { Button } from '@woldui/react/components/ui/button';
import { ButtonGroup } from '@woldui/react/components/ui/button-group';

export default function ButtonGroupOrientation() {
	return (
		<ButtonGroup orientation="vertical" aria-label="Zoom">
			<Button variant="bordered" size="icon" aria-label="Zoom in">
				<Plus aria-hidden />
			</Button>
			<Button variant="bordered" size="icon" aria-label="Zoom out">
				<Minus aria-hidden />
			</Button>
		</ButtonGroup>
	);
}
