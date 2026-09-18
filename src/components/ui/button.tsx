"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

/*
 * RETHEMED to the HeroUI v2 visual language. See docs/guidelines.md#theme.
 *
 * Two things differ from stock shadcn:
 *
 * 1. There are two axes, `variant` and `tone`, not one. HeroUI calls the second one
 *    `color`; it is `tone` here because <button> has a native `color` attribute, and a
 *    cva variant of the same name breaks every component that spreads button props
 *    (react-day-picker does exactly that in calendar.tsx). HeroUI describes a button as a
 *    shape (solid, bordered, flat, …) in a colour (primary, danger, …), which is why the
 *    tinted `flat` look is available in every colour rather than only for destructive.
 *    The compound variants below are that grid.
 *
 * 2. The legacy shadcn names still work. `default`, `outline`, `secondary`, `destructive`
 *    and `ghost` are kept because roughly a dozen generated components use them
 *    internally (dialog's close button, pagination, calendar navigation). Removing them
 *    would break those files silently.
 *
 * Motion here is CSS, not Framer Motion. The press is `active:scale`; the ripple is a
 * keyframe (`--animate-ripple` in globals.css) on a span positioned at the pointer.
 *
 * The ripple does force a client boundary, because the pointer coordinates can only be
 * read from the event — so Button is now a client component, where an earlier version
 * kept it on the server. That trade was made knowingly: the effect was wanted, and it
 * costs a few kB of handler rather than an animation library.
 */

const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center gap-2",
    "border border-transparent bg-clip-padding font-medium whitespace-nowrap",
    "select-none outline-none",
    // The HeroUI press: scale down briefly, with the transition on transform only.
    "transition-[transform,background-color,border-color,color,opacity,box-shadow]",
    "duration-[var(--motion-fast)] ease-[var(--motion-ease-out)]",
    "active:scale-[var(--motion-press-scale)]",
    "motion-reduce:transition-none motion-reduce:active:scale-100",
    "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        solid: "",
        bordered: "border-2 bg-transparent",
        light: "bg-transparent",
        flat: "",
        faded: "border-2",
        shadow: "",
        ghost: "bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline",

        // --- Legacy shadcn names, mapped onto the new grid -------------------
        default: "",
        outline: "border-2 bg-transparent",
        secondary: "",
        destructive: "",
      },
      tone: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
      },
      size: {
        // HeroUI runs roomier than shadcn. This is a deliberate density change.
        default: "h-10 rounded-md px-4 text-sm [&_svg:not([class*='size-'])]:size-4",
        xs: "h-6 rounded-sm px-2 text-[0.6875rem] [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-sm px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 rounded-lg px-6 text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10 rounded-md [&_svg:not([class*='size-'])]:size-4",
        "icon-xs": "size-6 rounded-sm [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-sm [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-12 rounded-lg [&_svg:not([class*='size-'])]:size-5",
      },
    },

    compoundVariants: [
      // --- solid ---------------------------------------------------------------
      { variant: ["solid", "default"], tone: "default", class: "bg-default-300 text-default-foreground hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: ["solid", "default"], tone: "primary", class: "bg-primary text-primary-foreground hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: ["solid", "default"], tone: "secondary", class: "bg-secondary text-secondary-foreground hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: ["solid", "default"], tone: "success", class: "bg-success text-success-foreground hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: ["solid", "default"], tone: "warning", class: "bg-warning text-warning-foreground hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: ["solid", "default"], tone: "danger", class: "bg-danger text-danger-foreground hover:opacity-[var(--motion-hover-opacity)]" },

      // --- flat (tinted) — the signature HeroUI look ---------------------------
      { variant: "flat", tone: "default", class: "bg-default-100 text-default-700 hover:bg-default-200" },
      { variant: "flat", tone: "primary", class: "bg-primary-100 text-primary-700 hover:bg-primary-200" },
      { variant: "flat", tone: "secondary", class: "bg-secondary-100 text-secondary-700 hover:bg-secondary-200" },
      { variant: "flat", tone: "success", class: "bg-success-100 text-success-700 hover:bg-success-200" },
      { variant: "flat", tone: "warning", class: "bg-warning-100 text-warning-700 hover:bg-warning-200" },
      { variant: "flat", tone: "danger", class: "bg-danger-100 text-danger-700 hover:bg-danger-200" },

      // --- bordered / outline --------------------------------------------------
      { variant: ["bordered", "outline"], tone: "default", class: "border-default-300 text-foreground hover:bg-default-100" },
      { variant: ["bordered", "outline"], tone: "primary", class: "border-primary text-primary-text hover:bg-primary-50" },
      { variant: ["bordered", "outline"], tone: "secondary", class: "border-secondary text-secondary-text hover:bg-secondary-50" },
      { variant: ["bordered", "outline"], tone: "success", class: "border-success text-success-text hover:bg-success-50" },
      { variant: ["bordered", "outline"], tone: "warning", class: "border-warning text-warning-text hover:bg-warning-50" },
      { variant: ["bordered", "outline"], tone: "danger", class: "border-danger text-danger-text hover:bg-danger-50" },

      // --- light / ghost -------------------------------------------------------

      // `ghost` is shadcn's borderless style, NOT HeroUI's bordered one. Fourteen
      // generated components pass variant="ghost" expecting no border — giving it one
      // put a blue outline around every calendar day, dialog close button and combobox
      // chevron. HeroUI's outlined look is `bordered`.
      { variant: ["light", "ghost"], tone: "default", class: "text-foreground hover:bg-default-100" },
      { variant: ["light", "ghost"], tone: "primary", class: "text-primary-text hover:bg-primary-50" },
      { variant: ["light", "ghost"], tone: "secondary", class: "text-secondary-text hover:bg-secondary-50" },
      { variant: ["light", "ghost"], tone: "success", class: "text-success-text hover:bg-success-50" },
      { variant: ["light", "ghost"], tone: "warning", class: "text-warning-text hover:bg-warning-50" },
      { variant: ["light", "ghost"], tone: "danger", class: "text-danger-text hover:bg-danger-50" },

      // --- faded ---------------------------------------------------------------
      { variant: "faded", tone: "default", class: "border-default-200 bg-default-100 text-default-700 hover:bg-default-200" },
      { variant: "faded", tone: "primary", class: "border-default-200 bg-default-100 text-primary-text hover:bg-default-200" },
      { variant: "faded", tone: "secondary", class: "border-default-200 bg-default-100 text-secondary-text hover:bg-default-200" },
      { variant: "faded", tone: "success", class: "border-default-200 bg-default-100 text-success-text hover:bg-default-200" },
      { variant: "faded", tone: "warning", class: "border-default-200 bg-default-100 text-warning-text hover:bg-default-200" },
      { variant: "faded", tone: "danger", class: "border-default-200 bg-default-100 text-danger-text hover:bg-default-200" },

      // --- shadow --------------------------------------------------------------
      { variant: "shadow", tone: "default", class: "bg-default-300 text-default-foreground shadow-lg shadow-default-300/50 hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: "shadow", tone: "primary", class: "bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: "shadow", tone: "secondary", class: "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/40 hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: "shadow", tone: "success", class: "bg-success text-success-foreground shadow-lg shadow-success/40 hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: "shadow", tone: "warning", class: "bg-warning text-warning-foreground shadow-lg shadow-warning/40 hover:opacity-[var(--motion-hover-opacity)]" },
      { variant: "shadow", tone: "danger", class: "bg-danger text-danger-foreground shadow-lg shadow-danger/40 hover:opacity-[var(--motion-hover-opacity)]" },

      // --- link ----------------------------------------------------------------
      { variant: "link", tone: "default", class: "text-foreground" },
      { variant: "link", tone: "primary", class: "text-primary-text" },
      { variant: "link", tone: "secondary", class: "text-secondary-text" },
      { variant: "link", tone: "success", class: "text-success-text" },
      { variant: "link", tone: "warning", class: "text-warning-text" },
      { variant: "link", tone: "danger", class: "text-danger-text" },

      // --- legacy shadcn names -------------------------------------------------
      // `secondary` and `destructive` carry their own colour, so they ignore `color`.
      { variant: "secondary", class: "bg-default-100 text-default-800 hover:bg-default-200" },
      { variant: "destructive", class: "bg-danger text-danger-foreground hover:opacity-[var(--motion-hover-opacity)]" },
    ],

    defaultVariants: {
      variant: "default",
      tone: "primary",
      size: "default",
    },
  }
)

type Ripple = { id: number; x: number; y: number; size: number }

/** Keyframe duration (600ms in globals.css) plus a margin, for the cleanup fallback. */
const RIPPLE_MS = 700

function Button({
  className,
  variant = "default",
  tone = "primary",
  size = "default",
  asChild = false,
  disableRipple = false,
  onPointerDown,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    /** Turn off the ripple for this button. */
    disableRipple?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const [ripples, setRipples] = React.useState<Ripple[]>([])
  const nextId = React.useRef(0)
  const timers = React.useRef<Set<ReturnType<typeof setTimeout>>>(new Set())

  // Any timer still pending when the button unmounts would call setState on a dead
  // component, so they are cleared together.
  React.useEffect(() => {
    const pending = timers.current
    return () => {
      for (const t of pending) clearTimeout(t)
      pending.clear()
    }
  }, [])

  /*
   * The ripple has to start where the pointer landed, so it needs the event — which is
   * why this is measured here rather than expressed in CSS. The expansion itself is a CSS
   * keyframe (see `--animate-ripple` in globals.css); no animation library is involved.
   */
  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    onPointerDown?.(event)

    if (disableRipple || asChild) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const rect = event.currentTarget.getBoundingClientRect()
    // Big enough to cover the button from wherever it starts: the far corner distance.
    const diameter = Math.max(rect.width, rect.height) * 2
    const id = nextId.current++

    setRipples((current) => [
      ...current,
      {
        id,
        x: event.clientX - rect.left - diameter / 2,
        y: event.clientY - rect.top - diameter / 2,
        size: diameter,
      },
    ])

    /*
     * `animationend` is the normal way a ripple is removed, but it is not guaranteed to
     * fire: a backgrounded tab freezes the animation at frame 0, and a hidden element
     * never runs it at all. Without this fallback the ripples would pile up in state for
     * as long as the button lives. RIPPLE_MS is the keyframe duration plus a margin.
     */
    const timer = setTimeout(() => {
      timers.current.delete(timer)
      removeRipple(id)
    }, RIPPLE_MS)
    timers.current.add(timer)
  }

  function removeRipple(id: number) {
    setRipples((current) => current.filter((r) => r.id !== id))
  }

  const commonProps = {
    "data-slot": "button",
    "data-variant": variant,
    "data-tone": tone,
    "data-size": size,
    className: cn(buttonVariants({ variant, tone, size, className })),
    onPointerDown: handlePointerDown,
    ...props,
  }

  /*
   * `asChild` renders through Slot, which requires exactly ONE child — and a trailing
   * `{cond && …}` counts as a second even when it evaluates to false. So the ripple layer
   * is never added in that mode, and the child passes through untouched.
   */
  if (asChild) {
    return <Comp {...commonProps}>{children}</Comp>
  }

  return (
    <Comp {...commonProps}>
      {children}
      {ripples.length > 0 && (
        /*
         * A separate stacking layer so the ripple is clipped to the button's radius and
         * sits under the label. aria-hidden because it carries no meaning.
         */
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        >
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              onAnimationEnd={() => removeRipple(ripple.id)}
              className="animate-ripple absolute rounded-full bg-current opacity-20"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          ))}
        </span>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
