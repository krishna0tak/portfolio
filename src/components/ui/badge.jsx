import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-none border px-3 py-1 text-[11px] font-normal tracking-[0.08em] transition-all uppercase font-mono",
  {
    variants: {
      variant: {
        default:
          "border-[#E2DFD7] bg-transparent text-[#202020] hover:border-[#202020]",
        active:
          "border-[#4A152E] bg-[#4A152E] text-[#F7F6F3]",
        plum:
          "border-[#4A152E] bg-transparent text-[#4A152E]",
        subtle:
          "border-[#E2DFD7] bg-[#EFECE6] text-[#77736F]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
