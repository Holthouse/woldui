import { Pin } from 'lucide-react';
import { Marker, MarkerContent, MarkerIcon } from '@woldui/react/components/ui/marker';

export default function MarkerVariants() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Marker variant="separator">
				<MarkerContent>Today</MarkerContent>
			</Marker>
			<Marker variant="border">
				<MarkerIcon>
					<Pin />
				</MarkerIcon>
				<MarkerContent>Pinned by Jonas</MarkerContent>
			</Marker>
		</div>
	);
}
