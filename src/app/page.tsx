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
      <div className="h-52" />
      <Timeline />
      <div className="h-52" />
      <Rules />
      <div className="h-60" />
      <div>
        <Text
          className="text-center text-3xl font-bold"
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
      <div className="h-60" />
      <Hero noVideo />
    </main>
  );
}
