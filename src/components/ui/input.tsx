"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Search, AlertCircle, CheckCircle } from "lucide-react"

interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "search" | "pricing" | "error"
  icon?: "search" | "alert" | "check" | "none"
  errorMessage?: string
  successMessage?: string
  isLoading?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", icon = "none", errorMessage, successMessage, isLoading, ...props }, ref) => {
    const isError = !!errorMessage || props["aria-invalid"]
    const isSuccess = !!successMessage

    const variantStyles = {
      default: "bg-transparent border border-input",
      search: "bg-secondary border-0 pl-9",
      pricing: "border border-input",
      error: "bg-destructive/5 border border-destructive",
    }

    return (
      <div className="w-full">
        <div className="relative flex items-center">
          {icon === "search" && (
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          )}
          {icon === "alert" && isError && (
            <AlertCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-destructive pointer-events-none" />
          )}
          {icon === "check" && isSuccess && (
            <CheckCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-500 pointer-events-none" />
          )}

          <input
            ref={ref}
            type={type}
            data-slot="input"
            disabled={isLoading || props.disabled}
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              variantStyles[variant],
              (icon === "search" || icon === "alert" || icon === "check") && "pl-9",
              isLoading && "opacity-60",
              className,
            )}
            {...props}
          />
        </div>

        {errorMessage && <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">{errorMessage}</p>}
        {successMessage && !errorMessage && (
          <p className="text-xs text-emerald-600 mt-1.5 flex items-center gap-1">{successMessage}</p>
        )}
      </div>
    )
  },
)

Input.displayName = "Input"

export { Input }
