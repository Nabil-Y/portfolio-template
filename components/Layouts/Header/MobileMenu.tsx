import Link from "next/link";
import Button from "../../UI/Button";
import { useState } from "react";
import HamburgerIcon from "../../UI/Icons/HamburgerIcon";
import CloseIcon from "../../UI/Icons/CloseIcon";

const MobileMenu = () => {
  const navTitles: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Blog: "/blog",
    About: "/about",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="block sm:hidden">
        <Button
          onClick={() => {
            setIsMenuOpen((prevState) => !prevState);
          }}
        >
          {!isMenuOpen && <HamburgerIcon />}
          {isMenuOpen && <CloseIcon />}
        </Button>
      </nav>
      {isMenuOpen && (
        <nav className="fixed left-0 z-10 h-full w-full bg-white p-4 dark:bg-black">
          <ul className="max-w-[200px]">
            {Object.keys(navTitles).map((title) => (
              <Link key={title} href={navTitles[title]}>
                <li>{title}</li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;

{
  /* <ul className="flex">
        {Object.keys(navTitles).map((title) => (
          <Link key={title} href={navTitles[title]}>
            <li
              className={
                isActive === navTitles[title]
                  ? "bg-greyLight dark:bg-greyDark"
                  : ""
              }
            >
              {title}
            </li>
          </Link>
        ))}
      </ul> */
}
