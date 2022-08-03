import Link from "next/link";

const HeaderNav = () => {
  const navTitles: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Blog: "/blog",
    About: "/about",
  };

  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {Object.keys(navTitles).map((title) => (
          <Link key={title} href={navTitles[title]}>
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
