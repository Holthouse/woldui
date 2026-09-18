/**
 * Component Purpose:
 * - Layout primitives: the smallest building blocks for composition (docs/guidelines.md#atoms).
 * - Domain-free and token-strict. Spacing comes from the Tailwind scale, never arbitrary values.
 *
 * These exist so sections compose with named intent (`<Stack gap="lg">`) instead of a
 * different ad-hoc flex incantation in every file.
 */

import * as React from 'react';
import { cn } from '@woldui/react/lib/utils';

const gaps = {
	none: 'gap-0',
	xs: 'gap-1',
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
} as const;

type Gap = keyof typeof gaps;

type StackProps = React.ComponentProps<'div'> & {
	gap?: Gap;
	align?: 'start' | 'center' | 'end' | 'stretch';
};

/** Vertical flow. The default container for anything that reads top to bottom. */
export function Stack({ gap = 'md', align = 'stretch', className, ...props }: StackProps) {
	return (
		<div
			className={cn(
				'flex flex-col',
				gaps[gap],
				align === 'start' && 'items-start',
				align === 'center' && 'items-center',
				align === 'end' && 'items-end',
				className
			)}
			{...props}
		/>
	);
}

type InlineProps = React.ComponentProps<'div'> & {
	gap?: Gap;
	align?: 'start' | 'center' | 'end' | 'baseline';
	justify?: 'start' | 'center' | 'end' | 'between';
	wrap?: boolean;
};

/** Horizontal flow. Wraps by default, because text-bearing rows overflow on mobile. */
export function Inline({
	gap = 'sm',
	align = 'center',
	justify = 'start',
	wrap = true,
	className,
	...props
}: InlineProps) {
	return (
		<div
			className={cn(
				'flex',
				wrap && 'flex-wrap',
				gaps[gap],
				align === 'start' && 'items-start',
				align === 'center' && 'items-center',
				align === 'end' && 'items-end',
				align === 'baseline' && 'items-baseline',
				justify === 'center' && 'justify-center',
				justify === 'end' && 'justify-end',
				justify === 'between' && 'justify-between',
				className
			)}
			{...props}
		/>
	);
}

type GridProps = React.ComponentProps<'div'> & {
	/** Minimum column width before the grid reflows. */
	min?: string;
	gap?: Gap;
};

/**
 * A responsive grid that reflows without breakpoints.
 *
 * `auto-fill` plus a minimum track width handles every viewport, which is why this takes
 * no `cols` prop — a fixed column count is what forces breakpoint juggling later.
 */
export function Grid({ min = '16rem', gap = 'md', className, style, ...props }: GridProps) {
	return (
		<div
			className={cn('grid', gaps[gap], className)}
			style={{
				gridTemplateColumns: `repeat(auto-fill, minmax(min(${min}, 100%), 1fr))`,
				...style
			}}
			{...props}
		/>
	);
}

type BoxProps = React.ComponentProps<'div'>;

/** An unopinionated container. Use when you need a styling hook and nothing more. */
export function Box({ className, ...props }: BoxProps) {
	return <div className={cn(className)} {...props} />;
}
