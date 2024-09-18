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
import { CgSpinner } from "react-icons/cg";
import { useToast } from "~/components/hooks/use-toast";

// Define the interface for the leaderboard data
interface LeaderboardData {
  name: string;
  tpoints: number;
}

const explicitForce = false;

const LeaderboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      window.location.href = "/signin";
      toast({
        title: "Error",
        description: "You need to be signed in to view this page",
        duration: 5000,
      });
      return;
    }

    const fetchLeaderboardData = async () => {
      try {
        setLoading(true);

        const urlParams = new URLSearchParams(window.location.search);
        const force = urlParams.get("force");
        if (explicitForce && force !== "true") {
          setLeaderboardData([{
            name: "YOU",
            tpoints: 404
          }, {
            name: "H4V3",
            tpoints: 1337
          }, {
            name: "B33N",
            tpoints: 1337
          }, {
            name: "PWN3D",
            tpoints: 404
          }]);
          return;
        }

        const response = await axios.get(`${BACKEND_URL}/leaderboard`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        const data: LeaderboardData[] = response.data;
        setLeaderboardData(data);
      } catch (err: any) {
        console.error(err);
        toast({
          title: "Error",
          description: "Failed to fetch leaderboard data",
          duration: 5000,
        });
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    void fetchLeaderboardData();
  }, [toast]);

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
          <div className="text-center">
            <CgSpinner className="animate-spin text-3xl" />
          </div>
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
