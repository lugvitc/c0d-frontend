import { forwardRef } from "react";
import { cn } from "~/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function Text(
  { children, className, ...other }: TextProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      {...other}
      className={cn("font-orbitron", className)}
    >
      {children}
    </div>
  );
}

export default forwardRef<HTMLDivElement, TextProps>(Text);
