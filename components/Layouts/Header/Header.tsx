import { MobileMenuProps } from "../../../types/types";
import ProfilePicture from "../../UI/Pictures/ProfilePicture";
import ThemeSwitch from "../../UI/ThemeSwitch";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";

const Header = (props: MobileMenuProps) => {
  const { menuState } = props;
  return (
    <header>
      <a href="#skipNav" className="sr-only">
        Skip to main content
      </a>
      <div className="flex flex-col items-center">
        <ProfilePicture />

        <div className="my-4 flex w-full items-center justify-between">
          <MobileMenu menuState={menuState} />
          <HeaderNav />

          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
