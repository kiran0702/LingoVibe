import { useThemeStore } from "../store/useThemeStore";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeSelector = () => {
  const { theme, setTheme } = useThemeStore();

  // Toggle between "light" and "dark"
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <MoonIcon className="size-5 text-gray-800" />
      ) : (
        <SunIcon className="size-5 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeSelector;
