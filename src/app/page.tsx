import Button from "~/components/button";
import Hero from "~/components/landing/hero";
import Learn from "~/components/landing/learn";
import Rules from "~/components/landing/rules";
import Sales from "~/components/landing/sales";
import Tmieline from "~/components/landing/timeline";
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
      <div className="h-52" />
      <Rules />
      <div className="h-52" />
      <Tmieline />
      <section className="flex h-screen flex-col items-center justify-center">
        <Text className="text-4xl font-bold" variant="secondary">
          ATTACK. DEFEND. CONTENT.
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
      </section>
      <div>
        <Text
          className="relative top-[-240px] text-center text-3xl font-bold"
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
      </div>
    </main>
  );
}
