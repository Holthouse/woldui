"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

/*
 * RETHEMED. See docs/guidelines.md#theme.
 *
 * `richColors` is on by default so a success reads as success and an error as an error
 * without every call site saying so. Sonner only tints a toast when it is enabled, and it
 * takes the colours from the --<type>-bg/border variables below, which are wired to the
 * tone scales: a pale tint in light mode, a deep one in dark. The text is a class, for the
 * reason given at classNames, and uses the tone step that stays legible on that tint
 * (docs/guidelines.md#accessibility). Sonner's own palette is not used.
 *
 * `info` maps to primary, `error` to danger — sonner's type names, this library's tones.
 *
 * Pass `richColors={false}` to get the neutral surface for every toast; the spread below
 * lets any of this be overridden.
 */

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "var(--success-50)",
          "--success-border": "var(--success-200)",
          "--info-bg": "var(--primary-50)",
          "--info-border": "var(--primary-200)",
          "--warning-bg": "var(--warning-50)",
          "--warning-border": "var(--warning-200)",
          "--error-bg": "var(--danger-50)",
          "--error-border": "var(--danger-200)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
          /*
           * The text colour is a class, not a variable, because sonner's own
           * --success-text and --warning-text collide with this theme's tokens of the
           * same name: setting one to the other resolves to itself and is dropped, so
           * those two toasts kept the default foreground. The background and border
           * variables have no such clash.
           *
           * The 700 step, not the tone's --text token: --text is tuned for the page
           * background, and on a tinted toast it is too light. Measured on this tint, 700
           * is the first step that clears AA in both themes — 5.0:1 light, 11.3:1 dark —
           * where --success-text gave 4.1:1 and --warning-text 3.1:1 in light mode.
           */
          success: "text-success-700!",
          info: "text-primary-700!",
          warning: "text-warning-700!",
          error: "text-danger-700!",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
