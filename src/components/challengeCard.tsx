"use client";
import Text from "~/components/text";
import { BsNut } from "react-icons/bs";

import React, { type HTMLAttributes } from "react";

export interface ChallengeItem {
  title: string;
  types: string[];
  // description: string;
  points: number;
  // solves: number;
}

interface ChallengeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    ChallengeItem {}

// Main Challenge Card Component
const ChallengeCard: React.FC<ChallengeProps> = ({
  title,
  types,
  // description,
  points,
  ...other
}) => {
  return (
    <div
      {...other}
      className={`transition-bg mb-5 cursor-pointer rounded-lg bg-[#2D2D2D80] p-6 duration-200 ease-in-out hover:border-2 hover:border-[#ff0000] hover:shadow-sm hover:shadow-[#ff0000]`}
    >
      <div className="flex flex-col">
        <BsNut size={52} className="rotate-90 text-white" />
        <Text
          className="mb-2 mt-4 text-3xl font-bold"
          variant="white"
          glow="none"
        >
          {title}
        </Text>
        <Text className="text-sm" variant="white" glow="none">
          {types.join(", ")}
        </Text>
        <Text className="mt-2 text-xl font-bold" variant="white" glow="none">
          {points}
        </Text>
        {/* <Text className="mt-4 text-lg" variant="white" glow="none">
          {description}
        </Text> */}
        {/* <Text className="mt-4 text-sm font-bold" variant="white" glow="none">
          SOLVED TIMES {solves}
        </Text> */}
      </div>
    </div>
  );
};

export default ChallengeCard;
