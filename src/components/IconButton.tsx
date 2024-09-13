import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import type { IconType } from "react-icons";

const iconButtonVariants = cva("font-orbitron flex items-center", {
  variants: {
    variant: {
      primary:
        "text-red-500 [text-shadow:_0_0_10px_#FF0000,0_0_20px_#FF0000,0_0_30px_#FF0000] filter drop-shadow-[0_0_10px_#FF0000]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  className?: string;
  icon: IconType;
  iconSize?: number;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "primary",
      icon: Icon,
      iconSize = 24,
      onClick,
      ...other
    },
    ref,
  ) => {
    const commonProps = {
      className: cn(iconButtonVariants({ variant }), className),
      onClick,
      ref,
      ...other,
    };

    return (
      <button {...commonProps}>
        <Icon size={iconSize} className="drop-shadow-[0_0_10px_#FF0000]" />
      </button>
    );
  },
);
IconButton.displayName = "IconButton";
export default IconButton;
