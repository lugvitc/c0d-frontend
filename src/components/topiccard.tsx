import { forwardRef } from "react";
import { cn } from "~/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "regular" | "glow";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = "regular", className, ...other }, ref) => {
    const variantClasses = {
      regular: "bg-[#1D1D1D]",
      glow: "bg-[#1D1D1D] [box-shadow:_0_0_15px_#50505088]",
    };

    return (
      <div
        ref={ref}
        {...other}
        className={cn(
          "inline-block rounded-md p-4 font-orbitron text-white",
          variantClasses[variant],
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
