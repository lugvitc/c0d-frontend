import { forwardRef } from "react";
import { cn } from "~/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  variant?: "regular" | "glow";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, variant = "regular", className, ...other }, ref) => {
    const variantClasses = {
      regular: "bg-[#1D1D1D]",
      glow: "bg-[#1D1D1D] [box-shadow:_0_0_20px_#6E6E6E]",
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
        {title}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
