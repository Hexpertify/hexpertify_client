import { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      return newTheme;
    });
  };

  return (
    <button onClick={handleThemeChange}>
      {isDarkMode ? (
        <HiOutlineSun className="text-primary-text" size={30} />
      ) : (
        <HiOutlineMoon className="text-primary-text" size={30} />
      )}
    </button>
  );
};

export default ThemeToggle;
