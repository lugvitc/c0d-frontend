import { forwardRef } from "react";
import { cn } from "~/lib/utils";

const LeaderboardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...other }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between rounded-md bg-[#1D1D1D] p-4 font-orbitron uppercase text-white",
        className,
      )}
      {...other}
    >
      <div className="inline-flex w-1/2 items-center space-x-2 font-orbitron">
        <div className="mr-1">POS.</div>
        <div>Team Name</div>
      </div>

      <div className="ml-20 w-1/6 font-orbitron">POINTS</div>
      <div className="w-1/6 font-orbitron">SOLVED COUNT</div>
    </div>
  );
});

LeaderboardHeader.displayName = "LeaderboardHeader";

export default LeaderboardHeader;
