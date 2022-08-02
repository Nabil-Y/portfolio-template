import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
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
      <Button onClick={() => setTheme("light")}>
        <SunIcon /> <span className="sr-only">Set theme to light</span>
      </Button>
    );
  }

  return (
    <Button onClick={() => setTheme("dark")}>
      <MoonIcon /> <span className="sr-only">Set theme to dark</span>
    </Button>
  );
};

export default ThemeSwitch;
