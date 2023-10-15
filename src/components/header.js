"use client";

import useAppStore from "@/store/app";
import { useGetFromStore } from "@/hooks";

function Header() {
  // STATES
  const isUserAuthorized = useGetFromStore(
    useAppStore,
    (state) => state.isUserAuthorized
  );

  return (
    <header>
      <p>CalorieCompass</p>
      {isUserAuthorized && (
        <nav onClick={() => console.log("menu from nav")}>menu</nav>
      )}
    </header>
  );
}

export default Header;
