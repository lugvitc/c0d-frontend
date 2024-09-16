"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Text from "../text";
import Card from "../topiccard";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Learn() {
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card as Element, {
        backgroundColor: "red",
        scrollTrigger: {
          trigger: card as Element,
          start: "top 20%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="flex w-full flex-col flex-wrap gap-24">
      <div className="mx-8 flex flex-col gap-8 md:mx-40">
        <Text
          className="text-4xl font-bold md:text-6xl"
          variant="primary"
          glow="primary"
        >
          ENTER THE WORLD OF CYBERSECURITY
        </Text>
        <Text
          className="text-md md:text-md font-bold md:text-3xl"
          variant="white"
        >
          TAILOR MADE JEOPARDY-STYLE CTF AND WORKSHOPS
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <Text className="text-3xl font-black md:text-4xl" variant="white">
          LEARN
        </Text>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-6">
          <Card className="card px-16 py-8 md:px-28 md:py-14">
            <Text className="text-md md:text-3xl" variant="white">
              OPERATING SYSTEMS
            </Text>
          </Card>
          <Card className="card px-16 py-8 md:px-28 md:py-14">
            <Text className="text-md md:text-3xl" variant="white">
              OSINT
            </Text>
          </Card>
          <Card className="card px-16 py-8 md:px-28 md:py-14">
            <Text className="text-md md:text-3xl" variant="white">
              WEB EXPLOITATION
            </Text>
          </Card>
          <Card className="card px-16 py-8 md:px-28 md:py-14">
            <Text className="text-md md:text-3xl" variant="white">
              BINARY EXPLOITATION
            </Text>
          </Card>
        </div>
        <Card className="card -z-80 mt-10 px-16 py-10 shadow-[0px_0px_40px_20px_#696969] md:px-28 md:py-14">
          <Text className="text-md md:text-3xl" variant="white">
            AND SO MUCH MORE!
          </Text>
        </Card>
        <Text
          className="text-md mt-12 p-10 font-bold md:text-3xl"
          variant="white"
        >
          FULLY HANDS ON, WITH LIVE DEMOS AND REAL CTFS TO PRACTICE ON
        </Text>
      </div>
    </section>
  );
}
