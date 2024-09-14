import Text from "../text";

export default function Sales() {
  return (
    <section id="prizes" className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Text className="text-3xl font-bold" variant="outline-white">
          ONE OF
        </Text>
        <Text className="text-3xl md:text-6xl font-bold" variant="white">
          VIT CHENNAI&rsquo;S
          <br />
        </Text>
        <Text className="text-3xl text-center md:text-6xl font-bold" variant="white">
          BIGGEST CYBERSECURITY
        </Text>
        <Text className="text-3xl md:text-6xl font-bold" variant="white">
          EVENT
        </Text>
      </div>
      <div className="h-12 md:h-24" />
      <div className="flex flex-col gap-8 sm:flex-row w-full justify-around">
        <div className="flex flex-col items-center justify-center">
          <Text className="text-3xl md:text-5xl font-bold" variant="white">
            200+
          </Text>
          <Text className="text-md md:text-3xl font-bold" variant="outline-white">
            Hackers
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Text className="text-3xl md:text-5xl font-bold" variant="primary" glow="primary">
            ₹12,000+
          </Text>
          <Text
            className="text-md md:text-3xl font-bold"
            variant="outline-primary"
            glow="primary"
          >
            Prizes
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Text className="text-3xl md:text-5xl font-bold" variant="white">
            24
          </Text>
          <Text className="text-md md:text-3xl font-bold" variant="outline-white">
            Hours
          </Text>
        </div>
      </div>
      <div className="h-40" />
    </section>
  );
}
