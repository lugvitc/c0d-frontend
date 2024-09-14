import Text from "../text";

const rules = [
  "Offline Overnight Jeopardy-style CTF",
  "Categories: Web, OSINT, Binary, Reversing, Forensics, Cryptography, Miscellaneous",
  "Flag format: c0d{}",
  "Teams of upto 3 members can be formed on the day of the event",
  "Points will be dynamic depending on number of solves",
  "Flag sharing is not permitted (Good luck doing that ;')",
];

export default function Rules() {
  return (
    <section id="rules" className="mx-10 md:mx-40 flex flex-col">
      <div className="flex flex-col gap-10 md:gap-20">
        <Text className="text-3xl md:text-3xl md:text-6xl font-bold" variant="primary" glow="primary">
          DETAILS
        </Text>
        <div className="flex flex-col gap-4">
          {rules.map((rule, index) => (
            <Text
              key={index}
              className="text-md md:text-3xl font-bold"
              variant={index % 2 == 0 ? "white" : "secondary"}
            >
              {rule}
            </Text>
          ))}
        </div>
      </div>
    </section>
  );
}
