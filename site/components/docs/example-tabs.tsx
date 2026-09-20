'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@woldui/react/components/ui/tabs';

/** The Preview / Code switch on every example card. Uses WoldUI's own Tabs. */
export function ExampleTabs({
	preview,
	code
}: {
	preview: React.ReactNode;
	code: React.ReactNode;
}) {
	return (
		<Tabs defaultValue="preview" className="gap-3">
			<TabsList>
				<TabsTrigger value="preview">Preview</TabsTrigger>
				<TabsTrigger value="code">Code</TabsTrigger>
			</TabsList>
			<TabsContent value="preview">{preview}</TabsContent>
			<TabsContent value="code">{code}</TabsContent>
		</Tabs>
	);
}
