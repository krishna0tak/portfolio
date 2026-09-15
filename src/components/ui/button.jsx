import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4A152E] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#202020] text-[#F7F6F3] border border-[#202020] hover:bg-[#4A152E] hover:border-[#4A152E]",
        primary:
          "bg-[#4A152E] text-[#F7F6F3] border border-[#4A152E] hover:bg-[#3B1224] hover:border-[#3B1224]",
        outline:
          "bg-transparent text-[#202020] border border-[#202020] hover:bg-[#202020] hover:text-[#F7F6F3]",
        ghost:
          "bg-transparent text-[#202020] hover:bg-[#EFECE6] hover:text-[#4A152E]",
        link:
          "bg-transparent text-[#4A152E] underline underline-offset-4 hover:text-[#3B1224] p-0 lowercase tracking-normal font-normal",
        subtle:
          "bg-[#EFECE6] text-[#202020] border border-[#E2DFD7] hover:border-[#202020] hover:bg-[#202020] hover:text-[#F7F6F3]",
      },
      size: {
        default: "h-11 px-8 py-3",
        sm: "h-9 px-4 py-2 text-[10px]",
        lg: "h-14 px-10 py-4 text-xs",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
