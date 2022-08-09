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
          <li key={title}>
            <Link href={navTitles[title]}>
              <a className="block hover:text-current dark:hover:text-current">
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
