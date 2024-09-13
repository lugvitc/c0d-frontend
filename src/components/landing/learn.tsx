import Text from "../text";
import Card from "../topiccard";

export default function Learn() {
  return (
    <section className="flex flex-col gap-24">
      <div className="flex flex-col mx-40 gap-8">
        <Text className="text-6xl font-bold" variant="primary" glow="primary">
          ENTER THE WORLD OF CYBERSECURITY
        </Text>
        <Text className="text-3xl font-bold" variant="white">
          TAILOR MADE JEOPARDY-STYLE CTF AND WORKSHOPS
        </Text>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <Text className="text-4xl font-black" variant="white">
          LEARN
        </Text>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6">
            <Card className="px-28 py-14">
              <Text className="text-3xl" variant="white">
                OPERATING SYSTEMS
              </Text>
            </Card>
            <Card className="px-28 py-14">
              <Text className="text-3xl" variant="white">
                OSINT
              </Text>
            </Card>
          </div>
          <div className="flex gap-6 z-10">
            <Card className="px-28 py-14">
              <Text className="text-3xl" variant="white">
                WEB EXPLOITATION
              </Text>
            </Card>
            <Card className="px-28 py-14">
              <Text className="text-3xl" variant="white">
                BINARY EXPLOITATION
              </Text>
            </Card>
          </div>
          <Card className="px-28 py-14 [box-shadow:0px_0px_45px_0px_#1D1D1D,_0px_0px_90px_0px_#1D1D1D,_0px_0px_320px_0px_#1D1D1D,_0px_0px_650px_0px_#1D1D1D,_0px_0px_1100px_0px_#1D1D1D,_0px_0px_2000px_0px_#1D1D1D]">
            <Text className="text-3xl" variant="white">
              AND SO MUCH MORE!
            </Text>
          </Card>
        </div>
        <Text className="text-3xl font-bold mt-12" variant="white">
          FULLY HANDS ON, WITH LIVE DEMOS AND REAL CTFS TO PRACTICE ON
        </Text>
      </div>
    </section>
  );
}
