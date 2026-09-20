import { ScrollArea, ScrollBar } from '@woldui/react/components/ui/scroll-area';

const boards = ['Roadmap', 'Sprint 42', 'Bugs', 'Design review', 'Research', 'Launch plan'];

export default function ScrollAreaHorizontal() {
	return (
		<ScrollArea className="w-full max-w-md rounded-lg border border-border whitespace-nowrap">
			<div className="flex w-max gap-3 p-4">
				{boards.map((board) => (
					<a
						key={board}
						href="#horizontal"
						className="flex h-24 w-36 shrink-0 items-end rounded-md bg-content2 p-3 text-sm font-medium"
					>
						{board}
					</a>
				))}
			</div>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	);
}
