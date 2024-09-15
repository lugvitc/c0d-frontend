"use client";
import { useState } from "react";
import LinkButton from "./LinkButton";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between bg-transparent p-4 text-white backdrop-blur-sm md:p-12">
      {/* Logo */}
      <Image
        className="ml-4 md:ml-14"
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
      />

      {/* Hamburger Menu for Mobile */}
      <div className="p-4 md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns=""
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden items-center justify-center space-x-4 md:flex">
        <LinkButton href="#prizes" variant="secondary">
          PRIZES
        </LinkButton>
        <LinkButton href="#timeline" variant="secondary">
          TIMELINE
        </LinkButton>
        <LinkButton href="#rules" variant="secondary">
          RULES
        </LinkButton>
        {/* <LinkButton href="#" variant="secondary">
          CHALLENGES
        </LinkButton>
        <LinkButton href="#" variant="secondary">
          LEADERBOARD
        </LinkButton>
        <LinkButton href="#" variant="primary">
        </LinkButton>
        <LinkButton href="#" variant="primary">
          SIGNIN
        </LinkButton> */}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col items-center space-y-4 bg-black py-6 text-white md:hidden">
          <LinkButton href="#prizes" variant="secondary" onClick={toggleMenu}>
            PRIZES
          </LinkButton>
          <LinkButton href="#timeline" variant="secondary" onClick={toggleMenu}>
            TIMELINE
          </LinkButton>
          <LinkButton href="#rules" variant="secondary" onClick={toggleMenu}>
            RULES
          </LinkButton>
          {/* <LinkButton href="#" variant="secondary" onClick={toggleMenu}>
            CHALLENGES
          </LinkButton>
          <LinkButton href="#" variant="secondary" onClick={toggleMenu}>
            LEADERBOARD
          </LinkButton>
          <LinkButton href="#" variant="primary" onClick={toggleMenu}>
            SIGNIN
          </LinkButton> */}
        </nav>
      )}
    </header>
  );
}
