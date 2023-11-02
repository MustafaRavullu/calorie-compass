"use client";
import useAppStore from "@/store/app";

import { useRef, useState } from "react";
import Button from "./button";
import ResetModal from "./reset-modal";
function NavLinks() {
  const resetEverything = useAppStore((state) => state.resetEverything);
  const resetModal = useRef(null);
  function openResetModal() {
    resetModal.current.showModal();
  }
  const [selectedLink, setSelectedLink] = useState(null);

  return (
    <>
      {/* NAV LINKS */}
      <nav className=" hidden lg:flex lg:gap-24">
        <div className="flex gap-2">
          <Button
            type="link"
            active={selectedLink}
            menu="recipe"
            href="/cc/recipe-explorer"
            content="Recipe Explorer"
            color="default"
            onClickFunc={() => setSelectedLink("recipe")}
          />
          <Button
            type="link"
            menu="diet"
            active={selectedLink}
            href="/cc/diet"
            content="Diet"
            color="default"
            onClickFunc={() => setSelectedLink("diet")}
          />
          <Button
            type="link"
            menu="stats"
            active={selectedLink}
            href="/cc/stats"
            content="Stats"
            color="default"
            onClickFunc={() => setSelectedLink("stats")}
          />
          <Button
            type="link"
            menu="guide"
            active={selectedLink}
            href="/cc/using-app"
            content="How it works?"
            color="default"
            onClickFunc={() => setSelectedLink("guide")}
          />
        </div>
        <Button
          type="button"
          menu="signout"
          content="Reset"
          color="red"
          onClickFunc={openResetModal}
        />
      </nav>
      {/* RESET MODAL */}
      <ResetModal resetEverything={resetEverything} ref={resetModal} />
    </>
  );
}

export default NavLinks;
