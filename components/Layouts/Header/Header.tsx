import { MobileMenuProps } from "../../../types/types";
import ProfilePicture from "../../UI/Pictures/ProfilePicture";
import ThemeSwitch from "../../UI/ThemeSwitch";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";

const Header = (props: { menuState: MobileMenuProps }) => {
  return (
    <header>
      <a href="#skipNav" className="sr-only">
        Skip to main content
      </a>
      <div className="flex flex-col items-center">
        <ProfilePicture />
        <div className="my-4 flex w-full justify-between">
          <MobileMenu menuState={props.menuState} />
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
