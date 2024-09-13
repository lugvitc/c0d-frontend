import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";

const textVariants = cva("font-orbitron", {
  variants: {
    variant: {
      primary: "text-[#FF0000]",
      secondary: "text-[#6E6E6E]",
      white: "text-white",
      outline: "[-webkit-text-stroke:_0.5px_#FFFFFF] text-transparent",
      "outline-primary":
        "[-webkit-text-stroke:_0.5px_#FF0000] text-transparent",
      "outline-white": "[-webkit-text-stroke:_0.5px_#FFFFFF] text-transparent",
    },
    glow: {
      none: "",
      primary: "[text-shadow:0_0_100px_#FF0000,0_0_30px_#FF0000]",
      secondary:
        "[text-shadow:_0_0_10px_#6E6E6E,0_0_20px_#6E6E6E,0_0_30px_#6E6E6E]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Text(
  {
    children,
    className,
    variant = "primary",
    glow = "none",
    ...other
  }: TextProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      {...other}
      className={cn(textVariants({ variant, glow }), className)}
    >
      {children}
    </div>
  );
}

export default forwardRef<HTMLDivElement, TextProps>(Text);
