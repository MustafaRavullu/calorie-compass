"use client";
import { useSearchParams } from "next/navigation";
import HamburgerMenu from "./hamburger-menu";
import Logo from "./logo";
import NavLinks from "./nav-links";
import Protected from "./protected";

function Header() {
  const searchParams = useSearchParams();
  return (
    <header
      className={`z-[10] h-[90px] fixed top-0 flex justify-center w-full border-b border-black py-6 px-4 ${
        searchParams.get("menu") === "diet"
          ? "bg-[#90a8ed]"
          : searchParams.get("menu") === "recipe"
          ? "bg-[#23a094]"
          : searchParams.get("menu") === "guide"
          ? "bg-[#ffc900]"
          : "bg-cc_background"
      }`}
    >
      <div className="relative flex justify-between w-[1200px]">
        <Logo />
        <Protected>
          <HamburgerMenu />
          <NavLinks />
        </Protected>
      </div>
    </header>
  );
}

export default Header;
