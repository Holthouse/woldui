"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Button } from "@woldui/react/components/ui/button"
import { Input } from "@woldui/react/components/ui/input"
import { Textarea } from "@woldui/react/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        /*
         * Rewritten rather than patched. The original was a twenty-utility string from
         * shadcn carrying two competing focus treatments — one drawn with a ring, one
         * with a border — plus an `in-data-[slot=combobox-content]:focus-within:` escape
         * hatch. Layering a third on top is what made the focus style unpredictable.
         *
         * Focus is stated once here: the border turns primary and the fill lifts to the
         * page background, which is what HeroUI does. `focus-within` rather than
         * `has-[…:focus-visible]`, so the field reads as focused whether it was clicked
         * or tabbed into. input-group.browser.test.tsx holds this to it.
         */
        "group/input-group relative flex h-10 w-full min-w-0 items-center",
        "rounded-md border-2 border-transparent bg-default-100",
        "transition-[background-color,border-color] duration-[var(--motion-fast)] outline-none",
        "focus-within:border-primary focus-within:bg-background",
        "has-[[data-slot][aria-invalid=true]]:border-danger",
        // Multi-line layouts (a textarea, or a block-aligned addon) grow instead of staying 40px.
        "has-[textarea]:h-auto has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:h-auto",
        "has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:flex-col",
        "has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-1 py-2 text-xs/relaxed font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 **:data-[slot=kbd]:rounded-[calc(var(--radius-sm)-2px)] **:data-[slot=kbd]:bg-muted-foreground/10 **:data-[slot=kbd]:px-1 **:data-[slot=kbd]:text-[0.625rem] [&>svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-2 has-[>button]:ml-[-0.275rem] has-[>kbd]:ml-[-0.275rem]",
        "inline-end":
          "order-last pr-2 has-[>button]:mr-[-0.275rem] has-[>kbd]:mr-[-0.275rem]",
        "block-start":
          "order-first w-full justify-start px-2 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
        "block-end":
          "order-last w-full justify-start px-2 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  [
    "flex items-center gap-2 rounded-md text-xs/relaxed shadow-none",
    /*
     * A button inside a field draws its focus ring ON its own edge, not offset from it.
     * Button's default is outline-offset-2, which on a 24px control sitting in a 40px
     * field — with the addon's negative margin pulling it toward the edge — puts a blue
     * rounded box outside the field. That is the "floating ring" on the combobox chevron.
     */
    "focus-visible:outline-offset-0",
  ],
  {
    variants: {
      size: {
        xs: "h-5 gap-1 rounded-[calc(var(--radius-sm)-2px)] px-1 [&>svg:not([class*='size-'])]:size-3",
        sm: "gap-1 rounded-sm",
        "icon-xs": "size-6 rounded-sm p-0 has-[>svg]:p-0",
        "icon-sm": "size-7 rounded-sm p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-xs/relaxed text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        /*
         * `h-full`, not Input's own `h-10`.
         *
         * The group is h-10 with a 2px border, so a child has 36px to live in. An input
         * carrying its standalone height of 40px overflows that by 2px top and bottom,
         * and being `rounded-none` its square corners push out past the group's 12px
         * radius — which is the "input overlapping the field" this component shipped with.
         * Filling the content box is the fix; the group owns the height.
         */
        /*
         * The background must stay transparent in EVERY state, focus included.
         *
         * Input carries `focus-visible:bg-background` for standalone use. Inside a group
         * that leaks: the input is `rounded-none` and fills the content box, so the moment
         * it paints a fill its square corners cover the field's rounded ones, which reads
         * as a squared-off notch at the left corners. The group owns the fill.
         */
        "h-full flex-1 rounded-none border-0 shadow-none ring-0 aria-invalid:ring-0",
        "bg-transparent focus-visible:bg-transparent dark:bg-transparent dark:focus-visible:bg-transparent",
        "focus-visible:ring-0",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
