import LinkButton from "./LinkButton";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex sticky outline-red-500 w-full items-center justify-between p-12 text-white">
      <Image className="ml-14" src="/logo.png" alt="Logo" width={50} height={50} />
      <nav className="flex items-center justify-center">
        <LinkButton href="/" variant="secondary">TIMELINE</LinkButton>
        <LinkButton href="/about" variant="secondary">RULES</LinkButton>
        <LinkButton href="/contact" variant="secondary">CHALLENGES</LinkButton>
        <LinkButton href="/login" variant="secondary">LEADEROARD</LinkButton>
        <LinkButton href="/login" variant="secondary">PRIZES</LinkButton>
        <LinkButton href="/login" variant="primary">SIGNIN</LinkButton>
      </nav>
    </header>
  );
}
