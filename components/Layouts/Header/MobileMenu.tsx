import Link from "next/link";
import HamburgerIcon from "../../UI/Icons/HamburgerIcon";
import CloseIcon from "../../UI/Icons/CloseIcon";
import { MobileMenuProps } from "../../../types/types";

const MobileMenu = (props: { menuState: MobileMenuProps }) => {
  const { isMenuOpen, setIsMenuOpen } = props.menuState;

  const navTitles: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Blog: "/blog",
    About: "/blog/about",
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <div>
      <nav className="block sm:hidden">
        <button onClick={toggleMenu} className="cursor-pointer p-2">
          {!isMenuOpen && (
            <>
              <HamburgerIcon />
              <span className="sr-only"> Open Menu</span>
            </>
          )}
          {isMenuOpen && (
            <>
              <CloseIcon />
              <span className="sr-only"> Close Menu</span>
            </>
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <nav className="fixed left-0 z-10 mt-2 h-full w-full bg-white p-4 dark:bg-black">
          <ul className="max-w-[200px]">
            {Object.keys(navTitles).map((title) => (
              <Link key={title} href={navTitles[title]}>
                <a className="block hover:text-current dark:hover:text-current">
                  <li className="animate-appear" onClick={toggleMenu}>
                    {title}
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
