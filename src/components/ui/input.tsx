import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-md border-2 border-transparent bg-default-100 px-3 py-2 text-sm " +
        "transition-[background-color,border-color,box-shadow] duration-[var(--motion-fast)] outline-none " +
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground " +
        "placeholder:text-default-500 " +
        "hover:bg-default-200 " +
        "focus-visible:border-primary focus-visible:bg-background focus-visible:outline-none " +
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 " +
        "aria-invalid:border-danger aria-invalid:bg-danger-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
