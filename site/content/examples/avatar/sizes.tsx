import { Avatar, AvatarBadge, AvatarFallback } from '@woldui/react/components/ui/avatar';

const sizes = ['sm', 'default', 'lg'] as const;

export default function AvatarSizes() {
	return (
		<div className="flex items-center gap-4">
			{sizes.map((size) => (
				<Avatar key={size} size={size}>
					<AvatarFallback>AK</AvatarFallback>
					{/* The dot is only colour, so it carries its meaning as text too. */}
					<AvatarBadge className="bg-success">
						<span className="sr-only">Online</span>
					</AvatarBadge>
				</Avatar>
			))}
		</div>
	);
}
