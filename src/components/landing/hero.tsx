"use client"
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
        className="absolute inset-0 h-full w-full object-cover bg-center"
      >
        <source src="/bg.webm" type="video/webm" />
        <source src="/c0d-frontend/bg.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      )}
      {!noVideo && (
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      )}
      <div className="relative z-10 flex flex-col items-center -mt-48">
        <Text className="text-md md:text-4xl font-bold" variant="secondary">
          UNCOVER. ADAPT. TRIUMPH
        </Text>
        <Text className="text-4xl md:text-8xl font-bold text-center" variant="white">
          CYBER-0-DAY
        </Text>
        <Text
          className="relative top-[-20px] md:top-[-60px] text-4xl md:text-8xl font-black [-webkit-text-stroke:_2px_#FF0000]"
          variant="outline-white"
          glow="primary"
        >
          3.0
        </Text>
        <Button
          className="relative top-[-20px] md:top-[-60px] mt-8 scale-125 px-10"
          variant="primary"
          onClick={() => {
            window.location.href = "https://chat.whatsapp.com/LeSY2rgosqXAw9qB52OlXU";
          }}
        >
          JOIN C0D
        </Button>
      </div>
    </section>
  );
}
