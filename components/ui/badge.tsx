// components/ui/badge.tsx
import { cn } from "@/lib/utils"
import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "destructive"
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
          variant === "default" && "bg-indigo-100 text-indigo-700",
          variant === "secondary" && "bg-gray-100 text-gray-700",
          variant === "success" && "bg-green-100 text-green-700",
          variant === "destructive" && "bg-red-100 text-red-700",
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"
