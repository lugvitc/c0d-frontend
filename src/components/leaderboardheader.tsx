import { forwardRef } from "react";
import { cn } from "~/lib/utils";

const LeaderboardHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...other }, ref) => {
  return (
    <thead
      ref={ref}
      className={cn(
        "font-orbitron text-sm uppercase tracking-wider text-white",
        className,
      )}
      {...other}
    >
      <tr className="text-left">
        <th className="w-1/6 rounded-l-lg bg-[#1D1D1D] px-4 py-3">POS</th>
        <th className="w-1/2 bg-[#1D1D1D] px-4 py-3">Team Name</th>
        <th className="w-1/6 bg-[#1D1D1D] px-4 py-3 text-center">Points</th>
        <th className="w-1/6 rounded-r-lg bg-[#1D1D1D] px-4 py-3 text-center">
          Solved Count
        </th>
      </tr>
    </thead>
  );
});

LeaderboardHeader.displayName = "LeaderboardHeader";

export default LeaderboardHeader;
