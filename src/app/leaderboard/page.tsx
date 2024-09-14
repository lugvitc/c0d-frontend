"use client";
import React, { useState } from "react";
import Text from "~/components/text";
import LeaderboardHeader from "~/components/leaderboardheader";
import LeaderboardEntry from "~/components/leaderboardentry";
import InputBox from "~/components/inputbox";

// Sample leaderboard data
const leaderboardData = [
  {
    rank: 1,
    name: "HECKWTF",
    score: 1000,
    solvedCount: 25,
  },
  { rank: 2, name: "hi", score: 69, solvedCount: 10 },
  { rank: 3, name: "hello", score: 69, solvedCount: 9 },
  { rank: 4, name: "hola", score: 69, solvedCount: 8 },
  { rank: 5, name: "bonjour", score: 69, solvedCount: 7 },
  { rank: 6, name: "konnichiwa", score: 69, solvedCount: 6 },
  { rank: 7, name: "namaste", score: 69, solvedCount: 5 },
];

const LeaderboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter the leaderboard data based on the search query
  const filteredData = leaderboardData.filter((entry) =>
    entry.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col space-y-8 p-8 text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <Text
          className="glow-primary text-4xl font-bold text-red-500"
          glow="primary"
        >
          LEADERBOARD
        </Text>
        <InputBox
          placeholder="Search"
          variant="secondary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
      </div>

      {/* Leaderboard Table */}
      <div className="w-full overflow-x-auto px-16 py-8">
        <table className="min-w-full table-auto border-separate border-spacing-y-4">
          {" "}
          {/* Add vertical spacing */}
          {/* Leaderboard Header */}
          <LeaderboardHeader className="rounded-t-lg" />
          {/* Rounded top for header */}
          {/* Leaderboard Entries */}
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((entry) => (
                <LeaderboardEntry
                  key={entry.rank}
                  rank={entry.rank}
                  name={entry.name}
                  score={entry.score}
                  solvedCount={entry.solvedCount}
                  className="rounded-lg" // Add rounded corners for each entry
                />
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-400">
                  No results found for &quot;{searchQuery}&quot;
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
