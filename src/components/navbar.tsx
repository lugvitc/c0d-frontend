"use client";
import { useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import Image from "next/image";

interface NavbarProps {
  notLanding?: boolean;
}

export default function Navbar({ notLanding = false }: NavbarProps) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsSignedIn(!!window.localStorage.getItem("token"));
  }, []);

  const handleSign = () => {
    if (isSignedIn) {
      window.localStorage.removeItem("token");
      window.location.reload();
    }
  };

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
        {!notLanding && (
          <LinkButton href="#prizes" variant="secondary">
            PRIZES
          </LinkButton>
        )}
        {!notLanding && (
          <LinkButton href="#timeline" variant="secondary">
            TIMELINE
          </LinkButton>
        )}
        {!notLanding && (
          <LinkButton href="#rules" variant="secondary">
            RULES
          </LinkButton>
        )}
        {notLanding && (
          <LinkButton href="/challenges" variant="secondary">
            CHALLENGES
          </LinkButton>
        )}
        {notLanding && (
          <LinkButton href="/leaderboard" variant="secondary">
            LEADERBOARD
          </LinkButton>
        )}
        {notLanding && (
          <LinkButton href="/signin" variant="primary" onClick={handleSign}>
            {isSignedIn ? "SIGNOUT" : "SIGNIN"}
          </LinkButton>
        )}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col items-center space-y-4 bg-black py-6 text-white md:hidden">
          {!notLanding && (
            <LinkButton href="#prizes" variant="secondary" onClick={toggleMenu}>
              PRIZES
            </LinkButton>
          )}
          {!notLanding && (
            <LinkButton
              href="#timeline"
              variant="secondary"
              onClick={toggleMenu}
            >
              TIMELINE
            </LinkButton>
          )}
          {!notLanding && (
            <LinkButton href="#rules" variant="secondary" onClick={toggleMenu}>
              RULES
            </LinkButton>
          )}
          {notLanding && (
            <LinkButton
              href="/challenges"
              variant="secondary"
              onClick={toggleMenu}
            >
              CHALLENGES
            </LinkButton>
          )}
          {notLanding && (
            <LinkButton
              href="/leaderboard"
              variant="secondary"
              onClick={toggleMenu}
            >
              LEADERBOARD
            </LinkButton>
          )}
          {notLanding && (
            <LinkButton
              href="/signin"
              variant="primary"
              onClick={() => {
                handleSign();
                toggleMenu();
              }}
            >
              {isSignedIn ? "SIGNOUT" : "SIGNIN"}
            </LinkButton>
          )}
        </nav>
      )}
    </header>
  );
}
