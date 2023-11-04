"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import useAppStore from "@/store/app";
import ResetModal from "./reset-modal";
import { MdTravelExplore } from "react-icons/md";
import { LuBookMarked } from "react-icons/lu";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";

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
        className={`relative z-[4] flex flex-col gap-[var(--hamburger-gap)] w-max 
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
        {/* SIDEBAR */}
        <aside
          className={`z-[3] right-0 origin-right flex border border-black rounded-md flex-col justify-between  absolute top-10 
           bg-cc_background
          w-[300px] h-fit transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100 visible pointer-events-auto"
              : "translate-y-2 opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col flex-1">
            <nav className="flex flex-col">
              <Link
                href="/cc/explorer"
                className="py-5 px-3 flex gap-2 items-center hover:bg-black hover:text-white"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                <MdTravelExplore className="text-2xl" />
                Explorer
              </Link>
              <Link
                href="/cc/cookbook"
                className="py-5 px-3 flex gap-2 items-center hover:bg-black hover:text-white"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                <LuBookMarked className="text-2xl" />
                Cookbook
              </Link>
              <Link
                href="/cc/stats"
                className="py-5 px-3 flex gap-2 items-center hover:bg-black hover:text-white"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                <IoStatsChartOutline className="text-2xl" />
                Stats
              </Link>
              <Link
                href="/cc/how-it-works"
                className="py-5 px-3 flex gap-2 items-center hover:bg-black hover:text-white"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                <FaQuestion className="text-2xl" />
                How it works?
              </Link>
            </nav>
          </div>
          <button
            type="button"
            onClick={openResetModal}
            className="flex gap-2 border-t border-gray-300 mt-16 py-5 px-3 hover:bg-red-500 hover:text-white text-left"
          >
            <RiShutDownLine className="text-2xl" />
            Reset
          </button>
        </aside>
      </label>
      {/* RESET MODAL */}
      <ResetModal resetEverything={resetEverything} ref={resetModal} />
    </>
  );
}

export default HamburgerMenu;
