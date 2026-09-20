import { Search } from 'lucide-react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput
} from '@woldui/react/components/ui/input-group';
import { Kbd } from '@woldui/react/components/ui/kbd';

export default function InputGroupUsage() {
	return (
		<InputGroup className="max-w-sm">
			<InputGroupAddon>
				<Search aria-hidden />
			</InputGroupAddon>
			<InputGroupInput type="search" placeholder="Search projects" aria-label="Search projects" />
			<InputGroupAddon align="inline-end">
				<Kbd>/</Kbd>
			</InputGroupAddon>
		</InputGroup>
	);
}
