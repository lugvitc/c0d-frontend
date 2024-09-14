import Button from "../button";
import Text from "../text";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bg.webm" type="video/webm" />
        <source src="/c0d-frontend/bg.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Text className="text-4xl font-bold" variant="secondary">
          UNCOVER. ADAPT. TRIUMPH
        </Text>
        <Text className="text-8xl font-bold" variant="white">
          CYBER-0-DAY
        </Text>
        <Text
          className="relative top-[-60px] text-8xl font-black [-webkit-text-stroke:_2px_#FF0000]"
          variant="outline-white"
          glow="primary"
        >
          3.0
        </Text>
        <Button
          className="relative top-[-60px] mt-8 scale-125 px-10"
          variant="primary"
        >
          REGISTER
        </Button>
      </div>
    </section>
  );
}
