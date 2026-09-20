'use client';

import * as React from 'react';
import { Avatar, AvatarFallback } from '@woldui/react/components/ui/avatar';
import { Badge } from '@woldui/react/components/ui/badge';
import { Checkbox } from '@woldui/react/components/ui/checkbox';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@woldui/react/components/ui/table';

const members = [
	{ id: 'ml', name: 'Maya Lindqvist', role: 'Owner', active: true },
	{ id: 'jo', name: 'Jonas Olsen', role: 'Editor', active: true },
	{ id: 'sr', name: 'Sara Ruiz', role: 'Viewer', active: false }
];

export default function TableSelectable() {
	const [selected, setSelected] = React.useState<string[]>([]);
	const all = selected.length === members.length;

	function toggle(id: string, on: boolean) {
		setSelected((current) => (on ? [...current, id] : current.filter((s) => s !== id)));
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-8">
						<Checkbox
							aria-label="Select all members"
							checked={all ? true : selected.length > 0 ? 'indeterminate' : false}
							onCheckedChange={(on) => setSelected(on === true ? members.map((m) => m.id) : [])}
						/>
					</TableHead>
					<TableHead>Member</TableHead>
					<TableHead>Role</TableHead>
					<TableHead>Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{members.map((member) => {
					const isSelected = selected.includes(member.id);
					return (
						<TableRow key={member.id} data-state={isSelected ? 'selected' : undefined}>
							<TableCell>
								<Checkbox
									aria-label={`Select ${member.name}`}
									checked={isSelected}
									onCheckedChange={(on) => toggle(member.id, on === true)}
								/>
							</TableCell>
							<TableCell>
								<div className="flex items-center gap-2">
									<Avatar size="sm">
										<AvatarFallback>{member.id.toUpperCase()}</AvatarFallback>
									</Avatar>
									{member.name}
								</div>
							</TableCell>
							<TableCell>{member.role}</TableCell>
							<TableCell>
								<Badge variant={member.active ? 'success' : 'secondary'}>
									{member.active ? 'Active' : 'Invited'}
								</Badge>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
