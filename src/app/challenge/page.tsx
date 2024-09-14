"use client";
import React from "react";
import IconButton from "~/components/IconButton";
import Text from "~/components/text";
import Button from "~/components/button";
import InputBox from "~/components/inputbox";
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "~/components/navbar";

const ChallengePage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between p-6">
      <Navbar />
      <div className="flex min-h-screen justify-between p-6">
        <div className="flex w-3/5 gap-4 bg-transparent p-6">
          <div className="mt-2">
            <IconButton
              icon={IoIosArrowBack}
              onClick={() => window.history.back()}
            />
          </div>
          <div className="flex flex-col gap-10">
            <Text className="text-3xl font-bold" glow="primary">
              CHALLENGES/CHALLENGE NAME
            </Text>
            <div className="flex flex-col gap-2">
              <Text className="text-lg" variant="white">
                CHALLENGE DESCRIPTION CHALLENGE DESCRIPTION
              </Text>

              <div className="mt-2 flex w-full space-x-4">
                <Text className="text-base" variant="white">
                  EASY
                </Text>
                <Text className="text-base" variant="white">
                  100 POINTS
                </Text>
                <Text className="text-base" variant="white">
                  SOLVED COUNT
                </Text>
              </div>

              <Text className="text-lg" variant="white">
                SPACE FOR THE ENTIRE CHALLENGE ITESELF, IF SOME PROBLEM THAT ONLY
                REQUIRES FILES JUST PUT SOMETHING LIKE DOWNLOAD THE FILES OR
                SOMETHING.
              </Text>
            </div>

            <Button className="w-1/2">DOWNLOAD CHALLENGE FILES</Button>

            <div className="mt-6 flex items-center space-x-8">
              <InputBox
                className="rounded-2xl border-2 p-4"
                variant="secondary"
                placeholder="Flag"
              />
              <Button variant="secondary">SUBMIT</Button>
            </div>
          </div>
        </div>

        <div className="flex w-1/4 items-start justify-end p-6">
          <Button variant="tertiary">REPORT A BUG</Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
