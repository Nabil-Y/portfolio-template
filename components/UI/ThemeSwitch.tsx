import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <SunIcon />
      </button>
    );
  }

  return (
    <button onClick={() => setTheme("dark")}>
      <MoonIcon />
    </button>
  );
};

export default ThemeSwitch;
