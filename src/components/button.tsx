import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "px-6 py-3 font-orbitron text-lg font-bold rounded-[16px] transition-all",
  {
    variants: {
      variant: {
        primary:
          "border-red-500 border-2 text-red-500 bg-transparent shadow-[_inset_0_0_15px_#FF000080,_0_0_15px_#FF000040] hover:text-white [text-shadow:_0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_30px_#FF0000]",
        secondary:
          "border-gray-400 border-2 text-gray-400 bg-transparent hover:border-red-500 hover:text-red-500 hover:shadow-[inset_0_0_15px_#FF000080,0_0_15px_#FF000040,0_0_40px_#FF000040,0_0_60px_#FF000020] hover:brightness-125 hover:[text-shadow:_0_0_10px_#FF000080,0_0_15px_#FF000040]",
        tertiary:
          "border-gray-500 border-2 text-gray-400 hover:text-gray-200 hover:brightness-125",
        "ghost-primary":
          "text-red-500 hover:text-white [text-shadow:_0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_30px_#FF0000]",
        "ghost-secondary":
          "text-gray-400 hover:text-red-500 hover:[text-shadow:_0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_30px_#FF0000]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...other }, ref) => {
    const commonProps = {
      ref,
      className: cn(buttonVariants({ variant }), className),
      ...other,
    };

    return <button {...commonProps}>{children}</button>;
  },
);

Button.displayName = "Button";

export default Button;
