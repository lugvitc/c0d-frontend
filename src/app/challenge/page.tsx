"use client";
import React from "react";
import IconButton from "~/components/IconButton";
import Text from "~/components/text";
import Button from "~/components/button";
import InputBox from "~/components/inputbox";
import { IoIosArrowBack } from "react-icons/io";

const ChallengePage: React.FC = () => {
  return (
    <div className="flex min-h-screen justify-between p-6">
      {/* Left Side Content */}
      <div className="flex w-3/5 flex-col bg-transparent p-6">
        {/* Header with Back Arrow */}
        <div className="flex w-full items-center justify-start">
          <IconButton
            icon={IoIosArrowBack}
            onClick={() => window.history.back()}
          />

          {/* Challenge Title */}
          <div className="ml-3 w-full">
            <Text className="text-3xl font-bold" glow="primary">
              CHALLENGES/CHALLENGE NAME
            </Text>
          </div>
        </div>

        {/* Challenge Description */}
        <div className="mt-12 w-full">
          <Text className="text-lg" variant="secondary">
            CHALLENGE DESCRIPTION CHALLENGE DESCRIPTION
          </Text>
        </div>

        {/* Challenge Info (easy, points, solved count) */}
        <div className="mt-2 flex w-full space-x-4">
          <Text className="text-base" variant="secondary">
            EASY
          </Text>
          <Text className="text-base" variant="secondary">
            100 POINTS
          </Text>
          <Text className="text-base" variant="secondary">
            SOLVED COUNT
          </Text>
        </div>

        {/* Challenge Main Content */}
        <div className="mt-2 w-full">
          <Text className="text-lg">
            Space for the entire challenge itself, if some problem that only
            requires files just put something like download the files or
            something.
          </Text>
        </div>

        {/* Download Challenge Files Button */}
        <div className="mt-12">
          <Button text="DOWNLOAD CHALLENGE FILES" />
        </div>

        {/* Flag Submission Section */}
        <div className="mt-12 flex items-center space-x-8">
          <InputBox variant="secondary" placeholder="Flag" />
          <Button variant="secondary" text="SUBMIT" />
        </div>
      </div>

      {/* Right Aligned Report a Bug Button */}
      <div className="flex w-1/4 items-start justify-end p-6">
        <Button variant="tertiary" text="REPORT A BUG" />
      </div>
    </div>
  );
};

export default ChallengePage;
