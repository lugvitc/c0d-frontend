import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";

const inputBoxVariants = cva(
  "font-orbitron border rounded-md p-2 focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        primary: "border-[#FF0000] text-[#FF0000] bg-transparent", //red
        secondary: "border-[#6E6E6E] text-[#6E6E6E] bg-transparent", //grey
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  },
);

export interface InputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputBoxVariants> {
  className?: string;
  hint?: string;
}

// Define the InputBox component
export const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ className, hint, variant = "primary", ...other }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          className={cn(inputBoxVariants({ variant }), className)}
          {...other}
        />
        {hint && <span className="text-sm text-gray-400">{hint}</span>}{" "}
        {/* Display hint if provided */}
      </div>
    );
  },
);

InputBox.displayName = "InputBox";

export default InputBox;
