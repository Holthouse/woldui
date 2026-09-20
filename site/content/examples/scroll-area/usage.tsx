import { ScrollArea } from '@woldui/react/components/ui/scroll-area';
import { Separator } from '@woldui/react/components/ui/separator';

const releases = Array.from({ length: 20 }, (_, i) => `v2.${20 - i}.0`);

export default function ScrollAreaUsage() {
	return (
		<ScrollArea className="h-64 w-56 rounded-lg border border-border">
			<div className="p-4">
				<p className="mb-3 text-sm font-medium">Releases</p>
				{releases.map((release) => (
					<div key={release}>
						<a href="#usage" className="block py-1 font-mono text-xs">
							{release}
						</a>
						<Separator className="my-1" />
					</div>
				))}
			</div>
		</ScrollArea>
	);
}
