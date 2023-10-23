"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import useAppStore from "@/store/app";
import { handleReset } from "@/utils";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const resetEverything = useAppStore((state) => state.resetEverything);
  const resetModal = useRef(null);
  function openResetModal() {
    resetModal.current.showModal();
  }
  function closeResetModal() {
    resetModal.current.close();
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
              href="/cc/recipe-explorer?menu=recipe"
              className="py-5 px-3 hover:bg-black hover:text-white"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Recipe Explorer
            </Link>
            <Link
              href="/cc/diet?menu=diet"
              className="py-5 px-3 hover:bg-black hover:text-white"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Diet
            </Link>
            <Link
              href="/cc/using-app?menu=guide"
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
      <dialog
        ref={resetModal}
        className="z-50 border-2 border-cc_text text-center
         backdrop:bg-gray-900/20 open:flex open:flex-col block
          opacity-0 -translate-y-20 transition-[opacity, transform]
           duration-300 pointer-events-none open:pointer-events-auto
            [&[open]]:opacity-100 [&[open]]:translate-y-0 inset-0"
      >
        <p
          className="w-full border-b-2 border-cc_text  py-2 font-extrabold
         text-xl"
        >
          Reset your account
        </p>
        <div className="flex flex-col p-2">
          <div className="flex flex-col my-2 gap-3">
            <p className="font-semibold text-lg">
              <span className="text-red-500">Warning</span>: If you continue,
              your data will no longer be saved.
            </p>
            <p className="mb-2">Please confirm if you would like to proceed.</p>
          </div>
          <div className="flex flex-col border-t border-cc_text py-2 gap-2">
            <button
              type="button"
              onClick={closeResetModal}
              className="border-4 transition-all duration-300 ease-in-out
               border-cc_dark_secondary bg-cc_secondary p-2 mt-3
                hover:bg-cc_dark_secondary hover:text-cc_dark_text"
            >
              Nevermind, I do not want to reset
            </button>
            <Link
              href="/"
              onClick={() => handleReset(resetEverything)}
              className="border-4 border-cc_dark_accent bg-cc_accent
               p-2 transition-all duration-300 ease-in-out
                hover:bg-cc_dark_accent hover:text-cc_dark_text"
            >
              Yes, reset!
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default HamburgerMenu;
