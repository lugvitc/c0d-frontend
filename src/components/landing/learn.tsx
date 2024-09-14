import Text from "../text";
import Card from "../topiccard";

export default function Learn() {
  return (
    <section className="w-full flex flex-col flex-wrap gap-24">
      <div className="mx-8 md:mx-40 flex flex-col gap-8">
        <Text className="text-4xl md:text-3xl md:text-6xl font-bold" variant="primary" glow="primary">
          ENTER THE WORLD OF CYBERSECURITY
        </Text>
        <Text className="text-md md:text-md md:text-3xl font-bold" variant="white">
          TAILOR MADE JEOPARDY-STYLE CTF AND WORKSHOPS
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <Text className="text-3xl md:text-4xl font-black" variant="white">
          LEARN
        </Text>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 w-full">
    
            <Card className="px-16 py-8 md:px-28 md:py-14">
              <Text className="text-md md:text-3xl" variant="white">
                OPERATING SYSTEMS
              </Text>
            </Card>
            <Card className="px-16 py-8 md:px-28 md:py-14">
              <Text className="text-md md:text-3xl" variant="white">
                OSINT
              </Text>
            </Card>
        
            <Card className="px-16 py-8 md:px-28 md:py-14">
              <Text className="text-md md:text-3xl" variant="white">
                WEB EXPLOITATION
              </Text>
            </Card>
            <Card className="px-16 py-8 md:px-28 md:py-14">
              <Text className="text-md md:text-3xl" variant="white">
                BINARY EXPLOITATION
              </Text>
            </Card>

        </div>
          <Card className="-z-80 px-16 mt-10 py-10 md:px-28 md:py-14 shadow-[0px_0px_40px_20px_#696969]">
            <Text className="text-md md:text-3xl" variant="white">
              AND SO MUCH MORE!
            </Text>
          </Card>
        <Text className="mt-12 p-10 text-md md:text-3xl font-bold" variant="white">
          FULLY HANDS ON, WITH LIVE DEMOS AND REAL CTFS TO PRACTICE ON
        </Text>
      </div>
    </section>
  );
}
