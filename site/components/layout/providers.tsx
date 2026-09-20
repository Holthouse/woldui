'use client';

import type * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@woldui/react/components/ui/sonner';
import { TooltipProvider } from '@woldui/react/components/ui/tooltip';

/** Theme (the `.dark` class the tokens key off), tooltip context and the toaster. */
export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<TooltipProvider>{children}</TooltipProvider>
			<Toaster />
		</ThemeProvider>
	);
}
