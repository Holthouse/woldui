/**
 * Motion tokens (docs/guidelines.md#motion).
 *
 * Every duration and easing comes from here. Nothing hardcodes a number,
 * for the same reason nothing hardcodes a hex colour: a design system that can only be
 * retuned by grepping for `0.2` is not a system.
 *
 * These mirror the `--motion-*` custom properties in src/styles/globals.css. The CSS copy
 * serves Tailwind utilities and plain CSS transitions; this copy serves Framer Motion,
 * which needs numbers in seconds rather than CSS time strings.
 */

/** Durations in seconds, as Framer Motion expects. */
export const duration = {
	/** State flips that should read as instant: checkbox, toggle. */
	instant: 0.1,
	/** Hover and focus affordances. */
	fast: 0.15,
	/** The default: dialogs, popovers, list items. */
	base: 0.2,
	/** Larger surfaces travelling further: sheets, drawers. */
	slow: 0.3
} as const;

/**
 * Easings as cubic-bezier control points.
 *
 * `out` is the workhorse — things arriving should decelerate. `inOut` is for movement
 * that both starts and ends on screen, such as a sidebar collapsing.
 */
export const easing = {
	out: [0.16, 1, 0.3, 1],
	inOut: [0.65, 0, 0.35, 1]
} as const;

/**
 * Spring presets, for motion that should feel physical rather than timed.
 *
 * Prefer a duration for anything informational; a spring's settle time is not
 * something a reader should have to wait on.
 *
 * @public Part of the token set, not yet reached by a feature.
 */
export const spring = {
	/** Short, barely-overshooting. Good for scale and small translations. */
	snappy: { type: 'spring', stiffness: 400, damping: 30 },
	/** Gentler, for larger surfaces. */
	soft: { type: 'spring', stiffness: 220, damping: 28 }
} as const;

/** The default transition. Reach for this before writing a bespoke one. */
export const transition = {
	duration: duration.base,
	ease: easing.out
} as const;

/** Seconds between children in a staggered list. */
export const staggerStep = 0.04;
