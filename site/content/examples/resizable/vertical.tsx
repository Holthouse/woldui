import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from '@woldui/react/components/ui/resizable';

export default function ResizableVertical() {
	return (
		<ResizablePanelGroup
			orientation="horizontal"
			className="min-h-64 max-w-xl rounded-lg border border-border"
		>
			<ResizablePanel defaultSize="30">
				<div className="flex h-full items-center justify-center p-4 text-sm font-medium">
					Sidebar
				</div>
			</ResizablePanel>
			<ResizableHandle aria-label="Resize sidebar" />
			<ResizablePanel defaultSize="70">
				{/* A group nests inside a panel to split it the other way. */}
				<ResizablePanelGroup orientation="vertical">
					<ResizablePanel defaultSize="60">
						<div className="flex h-full items-center justify-center p-4 text-sm font-medium">
							Preview
						</div>
					</ResizablePanel>
					<ResizableHandle aria-label="Resize console" />
					<ResizablePanel defaultSize="40">
						<div className="flex h-full items-center justify-center p-4 text-sm font-medium">
							Console
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
