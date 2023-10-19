"use client";
import { useGetFromStore } from "@/hooks";
import useAppStore from "@/store/app";
import Link from "next/link";
import { handleReset } from "@/utils";
function NavLinks() {
  const isUserAuthorized = useGetFromStore(
    useAppStore,
    (state) => state.isUserAuthorized
  );
  const resetEverything = useAppStore((state) => state.resetEverything);
  return (
    <>
      {isUserAuthorized && (
        <nav className="hidden lg:flex">
          <Link href="/cc/recipe-explorer">Recipe Explorer</Link>
          <Link href="/cc/diet">Diet</Link>
          <Link href="/cc/using-app">Using CalorieCompass</Link>
          <Link href="/" onClick={() => handleReset(resetEverything)}>
            Reset
          </Link>
        </nav>
      )}
    </>
  );
}

export default NavLinks;
