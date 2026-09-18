"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Tabs as TabsPrimitive } from "radix-ui"
import { LayoutGroup, motion, useReducedMotion } from "motion/react"

/*
 * RETHEMED to the HeroUI v2 visual language, and the one place a shared-layout animation
 * earns a Framer Motion import.
 *
 * The active tab is marked by a pill that SLIDES between triggers rather than appearing
 * under the new one. That is a shared-layout transition: the same element animates from
 * one trigger's box to another's. CSS cannot express it, because the two triggers are
 * separate boxes with no common animatable parent — which is exactly the case Framer
 * Motion's `layoutId` exists for.
 *
 * Elsewhere in this library the overlays animate with CSS keyed off Radix's data-state.
 * That is deliberate: CSS is simpler and needs no client boundary, so Framer Motion is
 * reserved for movement CSS genuinely cannot do.
 *
 * Under reduced motion the pill still moves, it just does not animate between positions.
 */

const TabsVariantContext = React.createContext<"default" | "line">("default")

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn("group/tabs flex gap-3 data-horizontal:flex-col", className)}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list relative inline-flex w-fit items-center justify-center rounded-md p-1 text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-default-100",
        line: "gap-1 rounded-none bg-transparent p-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  const id = React.useId()

  return (
    <TabsVariantContext.Provider value={variant ?? "default"}>
      {/*
       * LayoutGroup scopes the layoutId to this list, so two tab sets on one page do not
       * animate their pills into each other.
       */}
      <LayoutGroup id={id}>
        <TabsPrimitive.List
          data-slot="tabs-list"
          data-variant={variant}
          className={cn(tabsListVariants({ variant }), className)}
          {...props}
        />
      </LayoutGroup>
    </TabsVariantContext.Provider>
  )
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const variant = React.useContext(TabsVariantContext)
  const reduced = useReducedMotion()
  const ref = React.useRef<HTMLButtonElement>(null)
  const [active, setActive] = React.useState(false)

  /*
   * Radix owns the selected state, so it is read from the DOM attribute it writes rather
   * than duplicated in React state. A MutationObserver is how the pill learns it moved.
   */
  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const read = () => setActive(el.getAttribute("data-state") === "active")
    read()

    const observer = new MutationObserver(read)
    observer.observe(el, { attributes: true, attributeFilter: ["data-state"] })
    return () => observer.disconnect()
  }, [])

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      data-slot="tabs-trigger"
      className={cn(
        "relative z-10 inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap select-none",
        "rounded-sm px-3 py-1.5 text-sm font-medium",
        "text-default-500 transition-colors duration-[var(--motion-fast)]",
        "hover:text-foreground data-active:text-foreground",
        "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {/*
       * Rendered only for the active trigger, and deliberately NOT wrapped in
       * AnimatePresence. A shared-layout element is handed off between triggers: the old
       * one unmounts and the new one mounts in the same commit, and `layoutId` animates
       * the gap. An AnimatePresence per trigger breaks that — it keeps the outgoing pill
       * alive in its own tree, so two pills exist at once and neither travels.
       */}
      {active && (
        <motion.span
          layoutId="tabs-active-pill"
          aria-hidden="true"
          className={cn(
            "absolute inset-0 -z-10",
            variant === "line"
              ? "top-auto h-0.5 rounded-none bg-primary"
              : "rounded-sm bg-background shadow-small"
          )}
          transition={
            reduced
              ? { duration: 0 }
              : { type: "spring", stiffness: 380, damping: 32, mass: 0.6 }
          }
        />
      )}
      {children}
    </TabsPrimitive.Trigger>
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
