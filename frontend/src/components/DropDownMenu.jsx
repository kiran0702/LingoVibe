import { MoonIcon, SunIcon } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";
import useMediaQuery from "../hooks/useMediaQuery";

const DropDownMenu = () => {
  const { theme, setTheme } = useThemeStore();
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  // Only show on small screens (sidebar is hidden)
  if (isLargeScreen) return null;

  const nextTheme = theme === "light" ? "dark" : "light";
  const Icon = nextTheme === "dark" ? MoonIcon : SunIcon;
  const colorClass = nextTheme === "dark" ? "text-purple-500" : "text-yellow-400";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="flex items-center gap-3 w-full px-3 py-2 rounded hover:bg-base-200 focus:bg-base-200 focus:outline-none transition-colors cursor-pointer"
      aria-label={`Switch to ${nextTheme} mode`}
    >
      <Icon className={`w-5 h-5 ${colorClass}`} />
      <span className="flex-1 text-left font-medium">
        Switch to {nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)} Mode
      </span>
    </button>
  );
};

export default DropDownMenu;
