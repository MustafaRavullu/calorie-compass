"use client";
import HamburgerMenu from "./hamburger-menu";
import Logo from "./logo";
import NavLinks from "./nav-links";
import Protected from "./protected";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  function getHeaderBackgroundColor() {
    switch (pathname) {
      case "/cc/explorer":
        return "bg-[#90a8ed]";
      case "/cc/cookbook":
        return "bg-[#23a094]";
      case "/cc/how-it-works":
        return "bg-[#ffc900]";
      case "/cc/stats":
        return "bg-[#dc341e]";
      default:
        return "bg-cc_background"; // Default background color
    }
  }
  return (
    <header
      className={`z-[10] h-[90px] fixed top-0 flex justify-center w-full border-b border-black py-6 px-4 ${getHeaderBackgroundColor()}
        `}
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
