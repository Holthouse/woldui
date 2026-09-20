import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from '@woldui/react/components/ui/resizable';

export default function ResizableUsage() {
	return (
		<ResizablePanelGroup
			orientation="horizontal"
			className="min-h-40 max-w-xl rounded-lg border border-border"
		>
			{/* Strings are percentages; plain numbers would be pixels. */}
			<ResizablePanel defaultSize="35" minSize="20">
				<div className="flex h-full items-center justify-center p-4 text-sm font-medium">Files</div>
			</ResizablePanel>
			<ResizableHandle withHandle aria-label="Resize file list" />
			<ResizablePanel defaultSize="65">
				<div className="flex h-full items-center justify-center p-4 text-sm font-medium">
					Editor
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
