import HamburgerMenu from "./hamburger-menu";
import Logo from "./logo";
import NavLinks from "./nav-links";
import Protected from "./protected";
function Header() {
  return (
    <header
      className="z-30 fixed top-0 flex justify-between w-full border-b-2 
    border-cc_text py-1 px-2 bg-cc_background xl:justify-around lg:py-2"
    >
      <Logo />
      {/* If the screen size is larger than 1024, then the navigation links 
      are on otherwise hamburgermenu is on */}
      <Protected>
        <HamburgerMenu />
        <NavLinks />
      </Protected>
    </header>
  );
}

export default Header;
