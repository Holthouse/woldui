/**
 * Component Purpose:
 * - Typography primitives (docs/guidelines.md#atoms).
 * - Fix the type scale in one place so headings cannot drift per page.
 *
 * `Heading` takes an explicit `level` for semantics and an optional `size` for
 * appearance, because the right heading level and the right visual weight are not always
 * the same thing — and choosing the tag for its size is how heading order gets broken.
 */

import * as React from 'react';
import { cn } from '@woldui/react/lib/utils';

const sizes = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl'
} as const;

type HeadingProps = React.ComponentProps<'h1'> & {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	size?: keyof typeof sizes;
};

export function Heading({ level, size, className, ...props }: HeadingProps) {
	const Tag = `h${level}` as const;
	const defaultSize = (['3xl', '2xl', 'xl', 'lg', 'base', 'sm'] as const)[level - 1] ?? 'base';

	return (
		<Tag
			className={cn(
				'scroll-m-20 font-heading font-semibold tracking-tight text-balance',
				sizes[size ?? defaultSize],
				className
			)}
			{...props}
		/>
	);
}

type TextProps = React.ComponentProps<'p'> & {
	size?: keyof typeof sizes;
	tone?: 'default' | 'muted' | 'destructive';
	as?: 'p' | 'span' | 'div';
};

export function Text({ size = 'sm', tone = 'default', as = 'p', className, ...props }: TextProps) {
	const Tag = as;
	return (
		<Tag
			className={cn(
				sizes[size],
				tone === 'muted' && 'text-muted-foreground',
				tone === 'destructive' && 'text-destructive',
				className
			)}
			{...props}
		/>
	);
}

/** Secondary text. A shorthand for the tone people reach for most. */
export function Muted({ className, ...props }: Omit<TextProps, 'tone'>) {
	return <Text tone="muted" className={className} {...props} />;
}

/** Inline code or an identifier. Tabular, so ids line up in a column. */
export function Code({ className, ...props }: React.ComponentProps<'code'>) {
	return (
		<code
			className={cn(
				'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs tabular-nums',
				className
			)}
			{...props}
		/>
	);
}
