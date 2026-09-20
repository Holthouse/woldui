import { ArrowUp } from 'lucide-react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupText,
	InputGroupTextarea
} from '@woldui/react/components/ui/input-group';

export default function InputGroupWithTextarea() {
	return (
		<InputGroup className="max-w-md">
			<InputGroupTextarea placeholder="Leave a comment…" aria-label="Comment" rows={3} />
			<InputGroupAddon align="block-end">
				<InputGroupText>Markdown supported</InputGroupText>
				<InputGroupButton
					size="icon-xs"
					variant="solid"
					tone="primary"
					className="ml-auto rounded-full"
					aria-label="Post comment"
				>
					<ArrowUp aria-hidden />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}
