import ProfileIcon from "../../UI/Icons/ProfileIcon";
import ThemeSwitch from "../../UI/ThemeSwitch";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <a href="#skipNav" className="sr-only">
        Skip to main content
      </a>
      <div className="flex flex-col items-center">
        <ProfileIcon />
        <div className="my-4 flex w-full justify-between">
          <MobileMenu />
          <HeaderNav />
          <div className="my-auto ml-auto">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
