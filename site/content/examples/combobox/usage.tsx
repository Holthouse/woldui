'use client';

import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxInput,
	ComboboxItem,
	ComboboxLabel,
	ComboboxList
} from '@woldui/react/components/ui/combobox';

const projects = ['Website redesign', 'Mobile app', 'Design system', 'Onboarding', 'Help centre'];

export default function ComboboxUsage() {
	return (
		<Combobox items={projects}>
			<ComboboxInput placeholder="Pick a project" aria-label="Project" />
			<ComboboxContent>
				<ComboboxEmpty>No project found.</ComboboxEmpty>
				<ComboboxList>
					<ComboboxGroup>
						<ComboboxLabel>Projects</ComboboxLabel>
						{projects.map((project) => (
							<ComboboxItem key={project} value={project}>
								{project}
							</ComboboxItem>
						))}
					</ComboboxGroup>
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	);
}
