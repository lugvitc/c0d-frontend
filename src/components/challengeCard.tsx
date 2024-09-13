"use client";
import Text from "~/components/text";
import { BsNut } from "react-icons/bs";

import React from "react";



// Main Challenge Card Component
const ChallengeCard: React.FC<{
  title: string; type: string;
  description: string;
  points: number;
  difficulty: string;
  solves: number;
}> = ({ title, type, description, points, difficulty, solves = 0 }) => {
  return (
    <div
      className={`bg-[#2D2D2D80] hover:bg-transparent p-6 rounded-lg transition-bg duration-200 ease-in-out cursor-pointer mb-5`}
    >
      <div className="flex flex-col">
        <BsNut size={52} className="rotate-90" />
        <Text className="text-2xl font-bold mt-4 mb-2" variant="secondary" glow="none">
          {title}
        </Text>
        <Text className="text-sm" variant="secondary" glow="none">
          {type}
        </Text>
        <Text className="text-xl font-bold mt-2" variant="secondary" glow="none">
          {points} {difficulty}
        </Text>
        <Text className="text-lg mt-4" variant="secondary" glow="none">
          {description}
        </Text>
        <Text className="text-sm font-bold mt-4" variant="secondary" glow="none">
          SOLVED TIMES {solves}
        </Text>
      </div>
    </div>
  );
};


export default ChallengeCard;
