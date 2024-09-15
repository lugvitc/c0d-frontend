"use client";
import Button from "../button";
import Text from "../text";

export default function Hero({ noVideo }: { noVideo?: boolean }) {
  return (
    <section className="relative flex h-[85vh] w-full flex-col items-center justify-center overflow-hidden">
      {!noVideo && (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full bg-center object-cover"
        >
          <source src="/bg.webm" type="video/webm" />
          <source src="/c0d-frontend/bg.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {!noVideo && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      )}
      <div className="relative z-10 -mt-48 flex flex-col items-center">
        <Text className="text-md font-bold md:text-4xl" variant="secondary">
          UNCOVER. ADAPT. TRIUMPH
        </Text>
        <Text
          className="text-center text-4xl font-bold md:text-8xl"
          variant="white"
        >
          CYBER-0-DAY
        </Text>
        <Text
          className="relative top-[-20px] text-4xl font-black [-webkit-text-stroke:_2px_#FF0000] md:top-[-60px] md:text-8xl"
          variant="outline-white"
          glow="primary"
        >
          3.0
        </Text>
        <Button
          className="relative top-[-20px] mt-8 scale-125 px-10 md:top-[-60px]"
          variant="primary"
          onClick={() => {
            window.location.href =
              "https://chat.whatsapp.com/LeSY2rgosqXAw9qB52OlXU";
          }}
        >
          JOIN C0D
        </Button>
      </div>
    </section>
  );
}
