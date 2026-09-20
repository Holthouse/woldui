import { Label } from '@woldui/react/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@woldui/react/components/ui/select';

export default function SelectUsage() {
	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor="select-role">Role</Label>
			<Select defaultValue="editor">
				<SelectTrigger id="select-role" className="w-48">
					<SelectValue placeholder="Pick a role" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="owner">Owner</SelectItem>
					<SelectItem value="editor">Editor</SelectItem>
					<SelectItem value="viewer">Viewer</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
