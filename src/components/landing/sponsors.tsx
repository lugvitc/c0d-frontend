import Text from "../text";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Text className="text-3xl font-bold" variant="white">
        Our Sponsors
      </Text>
      <div className="min-h-[40rem]">
        <div className="absolute z-10 flex items-center overflow-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <Image
              key={index}
              className="animate-slide h-[38rem] object-cover opacity-80"
              src="/mobile-view.png"
              width={400}
              height={400}
              alt="Robot"
            />
          ))}
          <div className="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-[rgb(16,16,16,0.8)] to-[rgb(16,16,16,0)]" />
          <div className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-[rgb(16,16,16,0.8)] to-[rgb(16,16,16,0)]" />
        </div>
      </div>
    </section>
  );
}
