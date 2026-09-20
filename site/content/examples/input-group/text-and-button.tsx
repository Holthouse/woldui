import { Copy } from 'lucide-react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText
} from '@woldui/react/components/ui/input-group';

export default function InputGroupTextAndButton() {
	return (
		<InputGroup className="max-w-sm">
			<InputGroupAddon>
				<InputGroupText>https://</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput defaultValue="example.com/team" aria-label="Team page address" />
			<InputGroupAddon align="inline-end">
				<InputGroupButton size="icon-xs" aria-label="Copy address">
					<Copy aria-hidden />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}
