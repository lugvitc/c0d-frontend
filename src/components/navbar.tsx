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
    <header className="sticky backdrop-blur-sm top-0 z-20 flex w-full items-center justify-between p-4 md:p-12 text-white bg-transparent">
      {/* Logo */}
      <Image
        className="ml-4 md:ml-14"
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
      />
      
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden p-4">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6"
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
      <nav className="hidden md:flex items-center justify-center space-x-4">
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
        <nav className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 md:hidden">
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
