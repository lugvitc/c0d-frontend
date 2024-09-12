import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "px-6 py-3 font-orbitron text-lg font-bold rounded-[16px] transition-all",
  {
    variants: {
      variant: {
        primary:
          "border border-red-500 border-2 text-red-500 bg-transparent shadow-[_inset_0_0_15px_#FF000080,_0_0_15px_#FF000040] hover:text-white [text-shadow:_0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_30px_#FF0000]",
        secondary:
          "border border-gray-400 border-2 text-gray-400 bg-transparent hover:text-white hover:shadow-[inset_0_0_15px_#ffffff80,0_0_15px_#ffffff80,0_0_40px_#ffffff40,0_0_60px_#ffffff20] hover:brightness-125 [text-shadow:_0_0_10px_#ffffff80,0_0_15px_#ffffff40]",
        tertiary:
          "border border-gray-500 border-2 text-gray-400 hover:text-gray-200 hover:brightness-125",
        "ghost-primary":
          "text-red-500 hover:text-white [text-shadow:_0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_30px_#FF0000]",
        "ghost-secondary":
          "text-gray-400 hover:text-white [text-shadow:_0_0_8px_#ffffff80,0_0_15px_#ffffff40]",
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
  text?: string;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ text, className, variant = "primary", href, ...other }, ref) => {
    const commonProps = {
      ref,
      className: cn(buttonVariants({ variant }), className),
      ...other,
    };

    if (href) {
      return (
        <Link href={href} passHref>
          <button {...commonProps}>{text}</button>
        </Link>
      );
    } else {
      return <button {...commonProps}>{text}</button>;
    }
  },
);

Button.displayName = "Button";

export default Button;
