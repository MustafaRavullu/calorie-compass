"use client";

import { useState } from "react";
import Link from "next/link";
import useAppStore from "@/store/app";
import { handleReset } from "@/utils";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const resetEverything = useAppStore((state) => state.resetEverything);
  return (
    <>
      <label
        className={`flex flex-col gap-[var(--hamburger-gap)] w-max absolute top-[var(--hamburger-margin)] right-[var(--hamburger-margin)] z-10 cursor-pointer  before:w-[var(--bar-width)] before:h-[var(--bar-height)] before:bg-cc_text before:rounded-full ${
          isOpen &&
          "before:-rotate-45 before:w-[var(--x-width)] before:translate-x-0 before:translate-y-[var(--translate-before-y)] "
        } before:origin-right before:transition before:duration-200 before:ease-in-out after:w-[var(--bar-width)] after:h-[var(--bar-height)] after:bg-cc_text after:rounded-full ${
          isOpen &&
          "after:rotate-45 after:w-[var(--x-width)] after:translate-x-0 after:translate-y-[var(--translate-after-y)] "
        } after:origin-right after:transition after:duration-200 after:ease-in-out lg:hidden`}
      >
        <input
          type="checkbox"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`w-[var(--bar-width)] h-[var(--bar-height)] bg-cc_text rounded-full appearance-none outline-none pointer-events-none transition duration-200 ease-in-out ${
            isOpen && "opacity-0 w-0"
          }`}
        />
      </label>
      <aside
        className={`flex flex-col justify-between text-xl fixed top-0 right-0 px-2 py-4 pt-[var(--aside-pt)] bg-cc_background border-l-2 border-cc_text w-[250px] min-h-screen transition ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col flex-1 gap-4">
          <Link
            href="/cc/recipe-explorer"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            Recipe Explorer
          </Link>
          <Link href="/cc/diet" onClick={() => setIsOpen((isOpen) => !isOpen)}>
            Diet
          </Link>
          <Link
            href="/cc/using-app"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            Using CalorieCompass
          </Link>
        </nav>
        <Link
          href="/"
          className="text-left"
          onClick={() => handleReset(resetEverything)}
        >
          Reset
        </Link>
      </aside>
    </>
  );
}

export default HamburgerMenu;
