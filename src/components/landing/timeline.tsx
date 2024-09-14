import Text from "../text";

const dates = [
  {
    title: "17 SEPTEMBER",
    times: [
      {
        time: "09:00 TO 10:00",
        type: "WORKSHOP",
        title: "LINUX BASICS + FORENSICS",
        by: "BY SAMAR SINGH",
      },
      {
        time: "10:00 TO 11:00",
        type: "WORKSHOP",
        title: "WEB EXPLOITATION",
        by: "BY GOUTHAM RAJEEV",
      },
      {
        time: "11:00 TO 12:00",
        type: "WORKSHOP",
        title: "BINARY EXPLOITATION",
        by: "BY SIDDHARTH KARANAM",
      },
      {
        time: "12:00 TO 13:00",
        type: "WORKSHOP",
        title: "OSINT",
        by: "BY ANUMEYA SEHGAL",
      },
    ],
  },
];

export default function Tmieline() {
  return (
    <section id="timeline" className="mx-10 md:mx-40 flex flex-col">
      <div className="flex flex-col gap-20">
        <Text className="text-3xl md:text-6xl font-bold" variant="primary" glow="primary">
          THE TIMELINE
        </Text>
        <div className="flex flex-col gap-4">
          {dates.map((date, index) => (
            <div key={index} className="flex flex-col gap-20">
              <Text className="text-3xl md:text-5xl font-bold" variant="white">
                {date.title}
              </Text>
              {date.times.map((time, index) => (
                <div key={index} className="mx-8 md:mx-16 flex flex-col gap-2 md:gap-4">
                  <Text className="text-xl md:text-4xl font-bold" variant="white">
                    {time.time}
                  </Text>
                  <div className="flex flex-col gap-2">
                    <Text className="text-xl md:text-4xl font-bold" variant="secondary">
                      {time.type}
                    </Text>
                    <div className="h-4" />
                    <Text className="text-xl md:text-4xl font-bold" variant="white">
                      {time.title}
                    </Text>
                    <Text className="text-xl md:text-4xl font-bold" variant="white">
                      {time.by}
                    </Text>
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
