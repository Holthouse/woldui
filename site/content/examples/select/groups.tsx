import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue
} from '@woldui/react/components/ui/select';

export default function SelectGroups() {
	return (
		<Select>
			<SelectTrigger className="w-56" aria-label="Project">
				<SelectValue placeholder="Pick a project" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Active</SelectLabel>
					<SelectItem value="website">Website redesign</SelectItem>
					<SelectItem value="mobile">Mobile app</SelectItem>
					<SelectItem value="onboarding">Onboarding flow</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectLabel>Archived</SelectLabel>
					<SelectItem value="legacy">Legacy dashboard</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
