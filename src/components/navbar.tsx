import LinkButton from "./LinkButton";
import Image from "~/components/Image";

export default function Navbar() {
  return (
    <header className="sticky z-10 flex w-full items-center justify-between p-12 text-white outline-red-500">
      <Image
        className="ml-14"
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
      />
      <nav className="flex items-center justify-center">
        <LinkButton href="#timeline" variant="secondary">
          TIMELINE
        </LinkButton>
        <LinkButton href="#rules" variant="secondary">
          RULES
        </LinkButton>
        <LinkButton href="/contact" variant="secondary">
          CHALLENGES
        </LinkButton>
        <LinkButton href="/leaderboard" variant="secondary">
          LEADEROARD
        </LinkButton>
        <LinkButton href="#prizes" variant="secondary">
          PRIZES
        </LinkButton>
        <LinkButton href="/signin" variant="primary">
          SIGNIN
        </LinkButton>
      </nav>
    </header>
  );
}
