'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@woldui/react/components/ui/button';

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const dark = resolvedTheme === 'dark';
	return (
		<Button
			variant="light"
			tone="default"
			size="icon-sm"
			aria-label="Toggle light and dark theme"
			onClick={() => setTheme(dark ? 'light' : 'dark')}
		>
			{/* Both icons render; CSS shows the right one, so the server HTML is theme-agnostic. */}
			<Sun className="hidden dark:block" aria-hidden />
			<Moon className="block dark:hidden" aria-hidden />
		</Button>
	);
}
