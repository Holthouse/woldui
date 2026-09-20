import { Button } from '@woldui/react/components/ui/button';
import { ButtonGroup, ButtonGroupText } from '@woldui/react/components/ui/button-group';
import { Input } from '@woldui/react/components/ui/input';

export default function ButtonGroupWithInput() {
	return (
		<ButtonGroup className="w-full max-w-sm" aria-label="Invite a teammate">
			<ButtonGroupText>@</ButtonGroupText>
			<Input placeholder="username" aria-label="Username" />
			<Button variant="bordered">Invite</Button>
		</ButtonGroup>
	);
}
