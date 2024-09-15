/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useState, useEffect } from "react";
import Text from "~/components/text";
import LeaderboardHeader from "~/components/leaderboardheader";
import LeaderboardEntry from "~/components/leaderboardentry";
import InputBox from "~/components/inputbox";
import axios from "axios";
import { BACKEND_URL } from "~/lib/constants";
import Navbar from "~/components/navbar";

// Define the interface for the leaderboard data
interface LeaderboardData {
  name: string;
  tpoints: number;
}

const LeaderboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      window.location.href = "/signin";
      return;
    }

    const fetchLeaderboardData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/leaderboard`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        const data: LeaderboardData[] = response.data;
        setLeaderboardData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    void fetchLeaderboardData();
  }, []);

  const filteredData = leaderboardData.filter((entry) =>
    entry.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col space-y-8 p-8 text-white">
      <Navbar notLanding />
      {/* Header Section */}
      <div className="mx-16 flex items-center justify-between">
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
      <div className="w-full overflow-x-auto px-32 py-8">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : (
          <table className="min-w-full table-auto border-separate border-spacing-y-4">
            {/* Leaderboard Header */}
            <LeaderboardHeader className="rounded-t-lg" />

            {/* Leaderboard Entries */}
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((entry, index) => (
                  <LeaderboardEntry
                    key={index}
                    rank={index + 1} // Increment rank based on array index
                    name={entry.name}
                    score={entry.tpoints}
                    solvedCount={0} // If `solvedCount` is needed, update the backend to return it
                    className="rounded-lg"
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-400">
                    No results found for "{searchQuery}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;
