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
        className={`flex flex-col gap-[var(--hamburger-gap)] w-max absolute top-[var(--hamburger-margin)] right-[var(--hamburger-margin)] z-10 cursor-pointer  before:w-[var(--bar-width)] before:h-[var(--bar-height)] before:bg-cc_text before:rounded-full ${
          isOpen &&
          "before:-rotate-45 before:w-[var(--x-width)] before:translate-x-0 before:translate-y-[var(--translate-before-y)] "
        } before:origin-right before:transition before:duration-300 before:ease-in-out after:w-[var(--bar-width)] after:h-[var(--bar-height)] after:bg-cc_text after:rounded-full ${
          isOpen &&
          "after:rotate-45 after:w-[var(--x-width)] after:translate-x-0 after:translate-y-[var(--translate-after-y)] "
        } after:origin-right after:transition after:duration-300 after:ease-in-out lg:hidden`}
      >
        <input
          type="checkbox"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`w-[var(--bar-width)] h-[var(--bar-height)] bg-cc_text rounded-full appearance-none outline-none pointer-events-none transition duration-300 ease-in-out ${
            isOpen && "opacity-0 w-0"
          }`}
        />
      </label>
      {/* SIDEBAR */}
      <aside
        className={`flex flex-col justify-between text-xl fixed top-0 right-0 px-2 py-4 pt-[var(--aside-pt)] bg-cc_background border-l-2 border-cc_text w-[250px] min-h-screen transition duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <p className="fixed top-1 left-2 text-3xl font-extrabold">MENU</p>
        <div className="flex flex-col flex-1 gap-4">
          <nav className="flex flex-col  gap-4">
            <Link
              href="/cc/recipe-explorer"
              className="hover:underline hover:text-yellow-500"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Recipe Explorer
            </Link>
            <Link
              href="/cc/diet"
              className="hover:underline hover:text-blue-500"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Diet
            </Link>
            <Link
              href="/cc/using-app"
              className="hover:underline hover:text-green-500"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Using CalorieCompass
            </Link>
          </nav>
          <button type="button" className="text-left hover:underline">
            Change theme
          </button>
        </div>
        <button
          type="button"
          onClick={openResetModal}
          className="text-left border-t border-cc_text pt-3 w-full hover:text-red-500 hover:underline"
        >
          Sign out
        </button>
      </aside>
      {/* SIGN OUT MODAL */}
      <dialog
        ref={resetModal}
        className="border-2 border-cc_text text-center backdrop:bg-gray-900/20 open:flex open:flex-col block opacity-0 -translate-y-20 transition-[opacity, transform] duration-300 pointer-events-none open:pointer-events-auto [&[open]]:opacity-100 [&[open]]:translate-y-0 inset-0"
      >
        <p className="w-full border-b-2 border-cc_text  py-2 font-extrabold text-xl">
          Sign out of your account
        </p>
        <div className="flex flex-col p-2">
          <div className="flex flex-col my-2 gap-3">
            <p className="font-semibold text-lg">
              Warning: If you continue, your progress will no longer be saved.
            </p>
            <p className="mb-2">Please confirm if you would like to proceed.</p>
          </div>
          <div className="flex flex-col border-t border-cc_text py-2 gap-2">
            <button
              type="button"
              onClick={closeResetModal}
              className="border-4 border-cc_dark_secondary bg-cc_secondary p-2 mt-3 hover:bg-cc_dark_secondary hover:text-cc_dark_text"
            >
              Nevermind, I do not want to sign out
            </button>
            <Link
              href="/"
              onClick={() => handleReset(resetEverything)}
              className="border-4 border-cc_dark_accent bg-cc_accent p-2 hover:bg-cc_dark_accent hover:text-cc_dark_text"
            >
              Yes, sign out of my account
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default HamburgerMenu;
