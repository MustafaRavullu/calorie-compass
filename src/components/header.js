"use client";

import useUserStore from "@/store/user";
import { useGetFromStore } from "@/hooks";

function Header() {
  // STATES
  const isUserAuthorized = useGetFromStore(
    useUserStore,
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
