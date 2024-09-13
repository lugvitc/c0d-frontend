import { forwardRef } from "react";
import { cn } from "~/lib/utils";

export interface LeaderboardEntryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  rank: number;
  name: string;
  score: number;
  solvedCount: number;
}

const backgroundColors = {
  default: "#1D1D1D",
  first: "#FF0000",
  second: "#940000",
  third: "#4B0000",
};

const getBackgroundColor = (rank: number) => {
  if (rank === 1) return backgroundColors.first;
  if (rank === 2) return backgroundColors.second;
  if (rank === 3) return backgroundColors.third;
  return backgroundColors.default;
};

const LeaderboardEntry = forwardRef<HTMLDivElement, LeaderboardEntryProps>(
  ({ rank, name, score, solvedCount, className, ...other }, ref) => {
    return (
      <div
        ref={ref}
        {...other}
        className={cn(
          "flex items-center justify-between rounded-md p-4 transition-opacity hover:opacity-70",
          className,
        )}
        style={{ backgroundColor: getBackgroundColor(rank) }}
      >
        {/* Rank and Player/Team Name */}
        <div className="inline-flex w-1/2 items-center space-x-2 font-orbitron text-white">
          <div className="mr-1">{rank}.</div>
          <div className="w-full truncate">{name}</div>{" "}
          {/* Truncate long names */}
        </div>

        {/* Score */}
        <div className="w-1/6 text-center font-orbitron text-white">
          {score}
        </div>

        {/* Solved Count */}
        <div className="w-1/6 text-center font-orbitron text-white">
          {solvedCount}
        </div>
      </div>
    );
  },
);

LeaderboardEntry.displayName = "LeaderboardEntry";

export default LeaderboardEntry;
