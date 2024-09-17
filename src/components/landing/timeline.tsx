"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Text from "../text";

gsap.registerPlugin(ScrollTrigger);

const dates = [
  {
    title: "17 SEPTEMBER 2024",
    times: [
      {
        time: "08:00 TO 09:00",
        type: "SETUP",
        title: "OS INSTALLATIONS",
        by: "BY C0D TEAM",
      },
      {
        time: "09:00 TO 11:00",
        type: "WORKSHOP",
        title: "LINUX BASICS + FORENSICS",
        by: "BY SAMAR SINGH",
      },
      {
        time: "11:00 TO 12:00",
        type: "WORKSHOP",
        title: "WEB EXPLOITATION",
        by: "BY GOUTHAM RAJEEV",
      },
      {
        time: "12:00 TO 13:00",
        type: "WORKSHOP",
        title: "BINARY EXPLOITATION",
        by: "BY SIDDHARTH KARANAM",
      },
      {
        time: "13:00 TO 14:30",
        type: "BREAK",
        title: "LUNCH",
        by: "",
      },
      {
        time: "14:30 TO 15:30",
        type: "[R3D4CT3D]",
        title: "S3CR3T",
        by: "BY [W1THH3LD]",
      },
      {
        time: "15:30 TO 16:30",
        type: "WORKSHOP",
        title: "OSINT",
        by: "BY ANUMEYA SEHGAL",
      },
      {
        time: "17:00 TO 18:00",
        type: "QUIZ",
        title: "ROUND 1",
        by: "",
      },
      {
        time: "19:00 TO 20:00",
        type: "BREAK",
        title: "DINNER",
        by: "",
      },
      {
        time: "21:00",
        type: "CTF",
        title: "ROUND 2 BEGINS",
        by: "",
      },
    ],
  },
  {
    title: "18 SEPTEMBER 2024",
    times: [
      {
        time: "08:00",
        type: "CTF",
        title: "ROUND 2 ENDS",
        by: "",
      },
    ],
  },
];

export default function Tmieline() {
  useEffect(() => {
    gsap.utils.toArray(".timeline-item").forEach((item) => {
      gsap.fromTo(
        item as Element,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: item as Element,
            start: "top 80%",
            end: "bottom 20%",
            // markers: true,
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section id="timeline" className="mx-10 flex flex-col md:mx-40">
      <div className="flex flex-col gap-20">
        <Text
          className="text-3xl font-bold md:text-6xl"
          variant="primary"
          glow="primary"
        >
          THE TIMELINE
        </Text>
        <div className="flex flex-col gap-14">
          {dates.map((date, index) => (
            <div key={index} className="flex flex-col gap-20">
              <Text className="text-3xl font-bold md:text-5xl" variant="white">
                {date.title}
              </Text>
              {date.times.map((time, index) => (
                <div
                  key={index}
                  className="timeline-item mx-8 flex flex-col gap-2 overflow-hidden md:mx-16 md:gap-4"
                >
                  <div className="mx-16 flex flex-col gap-4 border-l-4 border-[#ff0000] pl-8 [box-shadow:_-10px_0px_20px_-5px_#ff0000]">
                    <Text
                      className="text-xl font-bold md:text-4xl"
                      variant="white"
                    >
                      {time.time}
                    </Text>
                    <div className="flex flex-col gap-2">
                      <Text
                        className="text-xl font-bold md:text-4xl"
                        variant="secondary"
                      >
                        {time.type}
                      </Text>
                      <div className="h-4" />
                      <Text
                        className="text-xl font-bold md:text-4xl"
                        variant="white"
                      >
                        {time.title}
                      </Text>
                      <Text
                        className="text-xl font-bold md:text-4xl"
                        variant="white"
                      >
                        {time.by}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
