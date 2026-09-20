import { Avatar, AvatarFallback, AvatarImage } from '@woldui/react/components/ui/avatar';

// A stand-in photo, inlined so the example works offline.
const photo = `data:image/svg+xml,${encodeURIComponent(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x2="1" y2="1"><stop offset="0" stop-color="#9353d3"/><stop offset="1" stop-color="#006fee"/></linearGradient></defs><rect width="64" height="64" fill="url(#g)"/></svg>'
)}`;

export default function AvatarUsage() {
	return (
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarImage src={photo} alt="Maya Lindqvist" />
				<AvatarFallback>ML</AvatarFallback>
			</Avatar>
			{/* No image: the initials show instead. */}
			<Avatar>
				<AvatarFallback>JO</AvatarFallback>
			</Avatar>
		</div>
	);
}
