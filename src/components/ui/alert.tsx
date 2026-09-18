import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/*
 * RETHEMED to HeroUI v2. See docs/guidelines.md#theme.
 *
 * shadcn's alert is a bordered card with muted text. HeroUI's is a tinted panel: the
 * surface takes the tone's lightest step, the title and body take the tone's legible text
 * step, and an icon sits in a filled circle of the solid tone. That tint is the whole
 * look, and it is why this carries a `tone` axis rather than the two variants shadcn ships.
 *
 * `variant` is kept because it was the old API: `destructive` maps onto `tone="danger"`.
 * Prefer `tone`.
 */

const alertVariants = cva(
  [
    "group/alert relative w-full rounded-lg px-4 py-3 text-left text-sm",
    "grid grid-cols-[auto_1fr] items-start gap-x-3 gap-y-0.5",
    // No icon supplied: the text takes the whole width rather than leaving a gap.
    "not-has-[[data-slot=alert-icon]]:grid-cols-1",
    "has-data-[slot=alert-action]:pr-3",
  ],
  {
    variants: {
      tone: {
        default: "bg-default-100 text-foreground",
        primary: "bg-primary-50 text-primary-text",
        secondary: "bg-secondary-50 text-secondary-text",
        success: "bg-success-50 text-success-text",
        warning: "bg-warning-50 text-warning-text",
        danger: "bg-danger-50 text-danger-text",
      },
      variant: {
        default: "",
        destructive: "bg-danger-50 text-danger-text",
      },
    },
    defaultVariants: {
      tone: "default",
      variant: "default",
    },
  }
)

function Alert({
  className,
  tone,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  // The old `destructive` variant is the danger tone under a different name.
  const resolvedTone = variant === "destructive" ? "danger" : tone

  return (
    <div
      data-slot="alert"
      data-tone={resolvedTone ?? "default"}
      role="alert"
      className={cn(alertVariants({ tone: resolvedTone, variant }), className)}
      {...props}
    />
  )
}

const alertIconVariants = cva(
  [
    "flex size-6 shrink-0 items-center justify-center rounded-full",
    "row-span-2 self-start",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5",
  ],
  {
    variants: {
      tone: {
        default: "bg-foreground text-background",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
)

/**
 * The filled circle that carries the alert's glyph.
 *
 * Its tone is taken from the Alert above it, so a caller sets the tone once. Pass `tone`
 * only to override.
 */
function AlertIcon({
  className,
  tone,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertIconVariants>) {
  return (
    <div
      data-slot="alert-icon"
      aria-hidden="true"
      className={cn(
        alertIconVariants({ tone }),
        // Inherit the parent's tone unless one was passed explicitly.
        !tone && [
          "group-data-[tone=default]/alert:bg-foreground group-data-[tone=default]/alert:text-background",
          "group-data-[tone=primary]/alert:bg-primary group-data-[tone=primary]/alert:text-primary-foreground",
          "group-data-[tone=secondary]/alert:bg-secondary group-data-[tone=secondary]/alert:text-secondary-foreground",
          "group-data-[tone=success]/alert:bg-success group-data-[tone=success]/alert:text-success-foreground",
          "group-data-[tone=warning]/alert:bg-warning group-data-[tone=warning]/alert:text-warning-foreground",
          "group-data-[tone=danger]/alert:bg-danger group-data-[tone=danger]/alert:text-danger-foreground",
        ],
        className
      )}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium [&_a]:underline [&_a]:underline-offset-3",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        // Inherits the alert's tone at reduced emphasis rather than going muted grey,
        // which is what keeps a tinted panel reading as one thing.
        "text-sm opacity-80 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-2",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn(
        "col-start-2 mt-2 flex items-center gap-2",
        // With no icon there is only one column.
        "group-not-has-[[data-slot=alert-icon]]/alert:col-start-1",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertIcon, AlertTitle, AlertDescription, AlertAction, alertVariants }
