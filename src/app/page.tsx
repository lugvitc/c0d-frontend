import Button from "~/components/button";
import Hero from "~/components/landing/hero";
import Learn from "~/components/landing/learn";
import Rules from "~/components/landing/rules";
import Sales from "~/components/landing/sales";
import Timeline from "~/components/landing/timeline";
import Navbar from "~/components/navbar";
import Text from "~/components/text";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <Sales />
      <Learn />
      <div className="h-36 md:h-52" />
      <Rules />
      <div className="h-36  md:h-52" />
      <Timeline />
      <div className="h-[20rem]  md:h-[25rem]" />
      <section className="relative items-center justify-center md:mt-128">
      <div className="relative z-10 h-fit flex flex-col items-center">
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
        >
          REGISTER
        </Button>
      </div>
      </section>
        <Text
          className="relative text-center text-3xl font-bold pb-64 pt-10 md:pt-5"
          variant="white"
        >
          Don&rsquo;t miss the
          <br />
          ultimate hacking
          <br />
          experience of the
          <br />
          year.
        </Text>
    </main>
  );
}
