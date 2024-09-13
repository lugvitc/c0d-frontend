import Text from "../text";

export default function Sales() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Text className="text-3xl font-bold" variant="outline-white">
          ONE OF
        </Text>
        <Text className="text-6xl font-bold" variant="white">
          VIT CHENNAI&rsquo;S
          <br />
        </Text>
        <Text className="text-6xl font-bold" variant="white">
          BIGGEST HACKATHONS
        </Text>
      </div>
      <div className="h-24" />
      <div className="flex w-full justify-around">
        <div className="flex flex-col items-center justify-center">
          <Text className="text-5xl font-bold" variant="white">
            200+
          </Text>
          <Text className="text-2xl font-bold" variant="outline-white">
            Hackers
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Text className="text-5xl font-bold" variant="primary" glow="primary">
            ₹12,000+
          </Text>
          <Text
            className="text-2xl font-bold"
            variant="outline-primary"
            glow="primary"
          >
            Prizes
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Text className="text-5xl font-bold" variant="white">
            24
          </Text>
          <Text className="text-2xl font-bold" variant="outline-white">
            Hours
          </Text>
        </div>
      </div>
      <div className="h-40" />
    </section>
  );
}
