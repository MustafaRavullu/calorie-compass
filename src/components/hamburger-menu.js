"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import useAppStore from "@/store/app";
import ResetModal from "./reset-modal";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const resetEverything = useAppStore((state) => state.resetEverything);
  const resetModal = useRef(null);
  function openResetModal() {
    resetModal.current.showModal();
  }

  return (
    <>
      {/* HAMBURGER MENU */}
      <label
        className={`z-[4] flex flex-col gap-[var(--hamburger-gap)] w-max absolute 
        top-[var(--hamburger-margin)] right-[var(--hamburger-margin)] 
        cursor-pointer  before:w-[var(--bar-width)] before:h-[var(--bar-height)]
         before:bg-black before:rounded-full ${
           isOpen &&
           "before:-rotate-45 before:w-[var(--x-width)] before:translate-x-0 before:translate-y-[var(--translate-before-y)] "
         } before:origin-right before:transition before:duration-300
         before:ease-in-out after:w-[var(--bar-width)] after:h-[var(--bar-height)]
          after:bg-black after:rounded-full ${
            isOpen &&
            "after:rotate-45 after:w-[var(--x-width)] after:translate-x-0 after:translate-y-[var(--translate-after-y)] "
          } after:origin-right after:transition after:duration-300 after:ease-in-out lg:hidden`}
      >
        <input
          type="checkbox"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`w-[var(--bar-width)] h-[var(--bar-height)] bg-black
          rounded-full appearance-none outline-none pointer-events-none transition
           duration-300 ease-in-out ${isOpen && "opacity-0 w-0"}`}
        />
      </label>
      {/* SIDEBAR */}
      <aside
        className={`z-[3] left-0 flex border-r border-black flex-col justify-between  fixed top-0 
           bg-cc_background
          w-[300px] h-full transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-[300px]"
          }`}
      >
        <div className="flex flex-col flex-1">
          <nav className="flex flex-col">
            <Link
              href="/cc/recipe-explorer"
              className="py-5 px-3 hover:bg-black hover:text-white"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Recipe Explorer
            </Link>
            <Link
              href="/cc/diet"
              className="py-5 px-3 hover:bg-black hover:text-white"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Diet
            </Link>
            <Link
              href="/cc/using-app"
              className="py-5 px-3 hover:bg-black hover:text-white"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Using CalorieCompass
            </Link>
          </nav>
        </div>
        <button
          type="button"
          onClick={openResetModal}
          className="py-5 px-3 hover:bg-red-500 hover:text-white text-left"
        >
          Reset
        </button>
      </aside>
      {/* RESET MODAL */}
      <ResetModal resetEverything={resetEverything} ref={resetModal} />
    </>
  );
}

export default HamburgerMenu;
