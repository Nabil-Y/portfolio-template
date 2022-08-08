import Link from "next/link";

const HeaderNav = () => {
  const navTitles: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Blog: "/blog",
    About: "/blog/about",
  };

  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {Object.keys(navTitles).map((title) => (
          <Link key={title} href={navTitles[title]}>
            <a className="hover:text-current dark:hover:text-current">
              <li>{title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
