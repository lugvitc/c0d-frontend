import { forwardRef } from "react";
import { cn } from "~/lib/utils";

export interface LeaderboardEntryProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  rank: number;
  name: string;
  score: number;
  solvedCount: string | number; // Allow string for custom text
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

const LeaderboardEntry = forwardRef<HTMLTableRowElement, LeaderboardEntryProps>(
  ({ rank, name, score, solvedCount, className, ...other }, ref) => {
    return (
      <tr
        ref={ref}
        {...other}
        className={cn(
          "rounded-xl font-orbitron text-sm tracking-wider text-white transition-opacity hover:opacity-70",
          className,
        )}
        style={{
          backgroundColor: getBackgroundColor(rank),
          marginBottom: "10px", // Add spacing between rows
          borderRadius: "8px", // Rounded corners
        }}
      >
        <td className="px-4 py-3">{rank}</td>
        <td className="truncate px-4 py-3">{name}</td>
        <td className="px-4 py-3 text-center">{score}</td>
        <td className="px-4 py-3 text-center">{solvedCount}</td>
      </tr>
    );
  },
);

LeaderboardEntry.displayName = "LeaderboardEntry";

export default LeaderboardEntry;
