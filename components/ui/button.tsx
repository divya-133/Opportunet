// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
//   {
//     variants: {
//       variant: {
//         default: "bg-blue-600 text-white hover:bg-blue-700",
//         outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-800",
//         secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 px-3",
//         lg: "h-11 px-6",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    // variants: {
    //   variant: {
    //     default: "bg-primary text-white hover:bg-primary/90",
    //     outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    //     secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    //     ghost: "bg-transparent hover:bg-muted", // ✅ Add this
    //   },
     variants: {
      variant: {
        default: "...",
        outline: "...",
        ghost: "...",
        link: "text-primary underline-offset-4 hover:underline", // ✅ Add this line
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10", // ✅ Add this
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

