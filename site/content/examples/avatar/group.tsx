import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount
} from '@woldui/react/components/ui/avatar';

const members = [
	{ initials: 'ML', tint: 'bg-primary-100 text-primary-700' },
	{ initials: 'JO', tint: 'bg-secondary-100 text-secondary-700' },
	{ initials: 'SR', tint: 'bg-success-100 text-success-700' }
];

export default function AvatarGroupExample() {
	return (
		<AvatarGroup role="group" aria-label="Project members: 3 shown, 4 more">
			{members.map((member) => (
				<Avatar key={member.initials}>
					<AvatarFallback className={member.tint}>{member.initials}</AvatarFallback>
				</Avatar>
			))}
			<AvatarGroupCount>+4</AvatarGroupCount>
		</AvatarGroup>
	);
}
