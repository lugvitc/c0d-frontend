"use client";
import { useEffect, useState } from "react";
import ChallengeCard, { type ChallengeItem } from "~/components/challengeCard";
import Navbar from "~/components/navbar";
import Text from "~/components/text";

interface ChallengeData extends ChallengeItem {
  id: number;
}

const chall: ChallengeData[] = [
  {
    id: 1,
    title: "Challenge 1",
    type: "Web",
    description: "Description 1",
    points: 100,
    difficulty: "Easy",
    solves: 0,
  },
  {
    id: 2,
    title: "Challenge 2",
    type: "Web",
    description: "Description 2",
    points: 200,
    difficulty: "Medium",
    solves: 0,
  },
  {
    id: 3,
    title: "Challenge 3",
    type: "Web",
    description: "Description 3",
    points: 300,
    difficulty: "Hard",
    solves: 0,
  },
  {
    id: 4,
    title: "Challenge 4",
    type: "Web",
    description: "Description 4",
    points: 400,
    difficulty: "Insane",
    solves: 0,
  },
  {
    id: 5,
    title: "Challenge 5",
    type: "Web",
    description: "Description 5",
    points: 500,
    difficulty: "Extreme",
    solves: 0,
  },
  {
    id: 6,
    title: "Challenge 6",
    type: "Web",
    description: "Description 6",
    points: 600,
    difficulty: "Impossible",
    solves: 0,
  },
  {
    id: 7,
    title: "Challenge 7",
    type: "Web",
    description: "Description 7",
    points: 700,
    difficulty: "Impossible",
    solves: 0,
  },
  {
    id: 8,
    title: "Challenge 8",
    type: "Web",
    description: "Description 8",
    points: 800,
    difficulty: "Impossible",
    solves: 0,
  },
  {
    id: 9,
    title: "Challenge 9",
    type: "Web",
    description: "Description 9",
    points: 900,
    difficulty: "Impossible",
    solves: 0,
  },
  {
    id: 10,
    title: "Challenge 10",
    type: "Web",
    description: "Description 10",
    points: 1000,
    difficulty: "Impossible",
    solves: 0,
  },
];

export default function ChallengesPage() {
  const [type, setType] = useState("all");
  const [challenges, setChallenges] = useState(chall);

  useEffect(() => {
    // fetch challenges
    setChallenges(chall);
  }, []);

  return (
    <div className="flex flex-col justify-between p-6">
      <Navbar />
      <div className="flex flex-col justify-between gap-7 p-6">
        <div className="flex justify-between">
          <Text className="text-4xl font-bold" glow="primary">
            CHALLENGES
          </Text>
          {/* a select menu for filtering by type */}
          <select
            className="rounded-lg bg-[#2D2D2D80] p-2 text-white"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="web">Web</option>
            <option value="reversing">Reversing</option>
            <option value="pwn">Pwn</option>
            <option value="crypto">Crypto</option>
            <option value="misc">Misc</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {challenges
            .filter((c) => type === "all" ? true : c.type.toLowerCase().includes(type.toLowerCase()))
            .map((challenge, index) => (
              <ChallengeCard
                key={index}
                title={challenge.title}
                type={challenge.type}
                description={challenge.description}
                points={challenge.points}
                difficulty={challenge.difficulty}
                solves={challenge.solves}
                onClick={() => {
                  window.location.href = `/challenges/${challenge.id}`;
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
