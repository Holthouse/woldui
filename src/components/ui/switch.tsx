"use client"

import * as React from "react"
import { cn } from "cn"
import { Switch as SwitchPrimitive } from "radix-ui"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--motion-base)] outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 data-[size=default]:h-7 data-[size=default]:w-12 data-[size=sm]:h-6 data-[size=sm]:w-10 p-1 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-default-200 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-background shadow-small ring-0",
          // A spring rather than a linear slide: the thumb settles instead of stopping dead.
          "transition-transform duration-[var(--motion-base)] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          "motion-reduce:transition-none",
          "group-data-[size=default]/switch:size-5 group-data-[size=sm]/switch:size-4",
          "group-data-[size=default]/switch:data-checked:translate-x-5",
          "group-data-[size=sm]/switch:data-checked:translate-x-4",
          "data-unchecked:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
