import { Info } from 'lucide-react';
import { Marker, MarkerContent, MarkerIcon } from '@woldui/react/components/ui/marker';

export default function MarkerUsage() {
	return (
		<div className="w-full max-w-sm">
			<Marker>
				<MarkerIcon>
					<Info />
				</MarkerIcon>
				<MarkerContent>
					Maya added you to <a href="#usage">Website redesign</a>.
				</MarkerContent>
			</Marker>
		</div>
	);
}
