import Text from "../text";

const rules = [
  "The CTF will be a 24-hour Jeopardy-style CTF.",
  "The CTF will have 5 categories: Web, OSINT, Binary, Crypto, and Forensics.",
  "Each category will have 5 challenges of varying difficulty.",
  "Each challenge will have a flag in the format: CYBER0DAY{flag}.",
  "The CTF will be hosted on a platform called CTFd.",
  "The CTF will be open to all participants.",
  "The CTF will have a maximum of 3 members per team.",
];

export default function Rules() {
  return (
    <section className="mx-40 flex flex-col">
      <div className="flex flex-col gap-20">
        <Text className="text-6xl font-bold" variant="primary" glow="primary">
          THE RULES
        </Text>
        <div className="flex flex-col gap-4">
          {rules.map((rule, index) => (
            <Text
              key={index}
              className="text-3xl font-bold"
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
