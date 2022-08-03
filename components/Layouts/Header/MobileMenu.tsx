import Link from "next/link";
import { useState } from "react";
import HamburgerIcon from "../../UI/Icons/HamburgerIcon";
import CloseIcon from "../../UI/Icons/CloseIcon";

const MobileMenu = () => {
  const navTitles: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Blog: "/blog",
    About: "/blog/about",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <nav className="block sm:hidden">
        <div
          onClick={toggleMenu}
          className="cursor-pointer p-2"
          role={"button"}
        >
          {!isMenuOpen && <HamburgerIcon />}
          {isMenuOpen && <CloseIcon />}
        </div>
      </nav>
      {isMenuOpen && (
        <nav className="fixed left-0 z-10 h-full w-full bg-white p-4 dark:bg-black">
          <ul className="max-w-[200px]">
            {Object.keys(navTitles).map((title) => (
              <Link key={title} href={navTitles[title]}>
                <li className="animate-appear" onClick={toggleMenu}>
                  {title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
