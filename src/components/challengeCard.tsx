"use client";
import Text from "~/components/text";
import { BsNut } from "react-icons/bs";

import React from "react";

// Main Challenge Card Component
const ChallengeCard: React.FC<{
  title: string;
  type: string;
  description: string;
  points: number;
  difficulty: string;
  solves: number;
}> = ({ title, type, description, points, difficulty, solves = 0 }) => {
  return (
    <div
      className={`transition-bg mb-5 cursor-pointer rounded-lg bg-[#2D2D2D80] p-6 duration-200 ease-in-out hover:bg-transparent`}
    >
      <div className="flex flex-col">
        <BsNut size={52} className="rotate-90" />
        <Text
          className="mb-2 mt-4 text-3xl font-bold"
          variant="white"
          glow="none"
        >
          {title}
        </Text>
        <Text className="text-sm" variant="white" glow="none">
          {type}
        </Text>
        <Text className="mt-2 text-xl font-bold" variant="white" glow="none">
          {points} {difficulty}
        </Text>
        <Text className="mt-4 text-lg" variant="white" glow="none">
          {description}
        </Text>
        <Text className="mt-4 text-sm font-bold" variant="white" glow="none">
          SOLVED TIMES {solves}
        </Text>
      </div>
    </div>
  );
};

export default ChallengeCard;
