"use client";
import useAppStore from "@/store/app";
import Link from "next/link";
import { handleReset } from "@/utils";
import { useRef } from "react";
function NavLinks() {
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
      {/* NAV LINKS */}
      <nav className="hidden lg:flex lg:gap-2 lg:text-xl">
        <Link
          href="/cc/recipe-explorer"
          className="trasform transition-transform duration-200 ease-in-out
           hover:underline hover:text-yellow-500 hover:scale-105"
        >
          Recipe Explorer
        </Link>
        <Link
          href="/cc/diet"
          className="trasform transition-transform duration-200 ease-in-out
           hover:underline hover:text-blue-700 hover:scale-105"
        >
          Diet
        </Link>
        <Link
          href="/cc/using-app"
          className="trasform transition-transform duration-200 ease-in-out
           hover:underline hover:text-green-500 hover:scale-105"
        >
          Using CalorieCompass
        </Link>
        <button
          type="button"
          className="trasform transition-transform duration-200 ease-in-out
           hover:underline hover:text-indigo-500 hover:scale-105"
        >
          Change theme
        </button>
        <button
          onClick={openResetModal}
          type="button"
          className="trasform transition-transform duration-200 ease-in-out
             hover:underline hover:text-red-500 hover:scale-105"
        >
          Sign Out
        </button>
      </nav>
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
              className="border-4 border-cc_dark_secondary transition-colors duration-300 ease-in-out bg-cc_secondary p-2 mt-3 hover:bg-cc_dark_secondary hover:text-cc_dark_text"
            >
              Nevermind, I do not want to sign out
            </button>
            <Link
              href="/"
              onClick={() => handleReset(resetEverything)}
              className="border-4 transition-colors duration-300 ease-in-out border-cc_dark_accent bg-cc_accent p-2 hover:bg-cc_dark_accent hover:text-cc_dark_text"
            >
              Yes, sign out of my account
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default NavLinks;
