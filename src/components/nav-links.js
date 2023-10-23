"use client";
import useAppStore from "@/store/app";
import Link from "next/link";
import { handleReset } from "@/utils";
import { useLayoutEffect, useRef, useState } from "react";
import Button from "./button";
import { useSearchParams } from "next/navigation";
function NavLinks() {
  const resetEverything = useAppStore((state) => state.resetEverything);
  const resetModal = useRef(null);
  function openResetModal() {
    resetModal.current.showModal();
  }
  function closeResetModal() {
    resetModal.current.close();
  }
  const searchParams = useSearchParams();
  const [selectedLink, setSelectedLink] = useState(null);
  useLayoutEffect(() => {
    setSelectedLink(searchParams.get("menu"));
  }, [searchParams]);

  return (
    <>
      {/* NAV LINKS */}
      <nav className=" hidden lg:flex lg:gap-24">
        <div className="flex gap-2">
          <Button
            active={selectedLink}
            menu="recipe"
            href="/cc/recipe-explorer?menu=recipe"
            content="Recipe Explorer"
            color="default"
            onClickFunc={() => setSelectedLink("recipe")}
          />
          <Button
            menu="diet"
            active={selectedLink}
            href="/cc/diet?menu=diet"
            content="Diet"
            color="default"
            onClickFunc={() => setSelectedLink("diet")}
          />
          <Button
            menu="guide"
            active={selectedLink}
            href="/cc/using-app?menu=guide"
            content="Guide"
            color="default"
            onClickFunc={() => setSelectedLink("guide")}
          />
        </div>
        <Button
          href=""
          menu="signout"
          content="Reset"
          color="red"
          onClickFunc={openResetModal}
        />
      </nav>
      {/* SIGN OUT MODAL */}
      <dialog
        ref={resetModal}
        className="border-2 border-cc_text text-center backdrop:bg-gray-900/20 open:flex open:flex-col block opacity-0 -translate-y-20 transition-[opacity, transform] duration-300 pointer-events-none open:pointer-events-auto [&[open]]:opacity-100 [&[open]]:translate-y-0 inset-0"
      >
        <p className="w-full border-b-2 border-cc_text  py-2 font-extrabold text-xl">
          Reset your account
        </p>
        <div className="flex flex-col p-2">
          <div className="flex flex-col my-2 gap-3">
            <p className="font-semibold text-lg">
              Warning: If you continue, your data will no longer be saved.
            </p>
            <p className="mb-2">Please confirm if you would like to proceed.</p>
          </div>
          <div className="flex flex-col border-t border-cc_text py-2 gap-2">
            <button
              type="button"
              onClick={closeResetModal}
              className="border-4 border-cc_dark_secondary transition-colors duration-300 ease-in-out bg-cc_secondary p-2 mt-3 hover:bg-cc_dark_secondary hover:text-cc_dark_text"
            >
              Nevermind, I do not want to reset
            </button>
            <Link
              href="/"
              onClick={() => handleReset(resetEverything)}
              className="border-4 transition-colors duration-300 ease-in-out border-cc_dark_accent bg-cc_accent p-2 hover:bg-cc_dark_accent hover:text-cc_dark_text"
            >
              Yes, reset!
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default NavLinks;
