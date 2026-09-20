import { Button } from '@woldui/react/components/ui/button';
import {
	ButtonGroup,
	ButtonGroupSeparator,
	ButtonGroupText
} from '@woldui/react/components/ui/button-group';

export default function ButtonGroupUsage() {
	return (
		<ButtonGroup aria-label="Clipboard">
			<Button variant="bordered">Copy</Button>
			<ButtonGroupSeparator />
			<Button variant="bordered">Paste</Button>
			<ButtonGroupText>or</ButtonGroupText>
			<Button variant="bordered">Clear</Button>
		</ButtonGroup>
	);
}
