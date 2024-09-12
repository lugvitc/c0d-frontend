import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import type { IconType } from "react-icons";
import { useRouter } from "next/router";

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

export function IconButton(
  {
    className,
    variant = "primary",
    icon: Icon,
    iconSize = 24,
    ...other
  }: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const commonProps = {
    className: cn(iconButtonVariants({ variant }), className),
    onClick: handleClick,
    ref,
    ...other,
  };

  return (
    <button {...commonProps}>
      <Icon size={iconSize} className="drop-shadow-[0_0_10px_#FF0000]" />
    </button>
  );
}

export default forwardRef<HTMLButtonElement, IconButtonProps>(IconButton);
