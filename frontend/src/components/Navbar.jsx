import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, SparklesIcon, ChevronDown } from "lucide-react";
import useLogout from "../hooks/useLogout";
import NotificationsNavButton from "./NotificationsNavButton";
import useMediaQuery from "../hooks/useMediaQuery";
import ThemeSelector from "./ThemeSelector"; // For large screens
import DropDownMenu from "./DropDownMenu";   // For small screens inside dropdown

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  // Show logo if on chat page OR sidebar is hidden (small screen)
  const showLogo = isChatPage || !isLargeScreen;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full">
          {/* Logo + Site Name */}
          {showLogo && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <SparklesIcon className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  LingoVibe
                </span>
              </Link>
            </div>
          )}

          {/* Large screen: inline menu */}
          {isLargeScreen ? (
            <div className="flex items-center gap-3 ml-auto">
              <Link to="/notification">
                <NotificationsNavButton />
              </Link>

              {/* Use ThemeSelector on large screens */}
              <ThemeSelector />

              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img
                    src={authUser?.profilePic}
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn btn-ghost btn-circle"
                onClick={logoutMutation}
                aria-label="Logout"
              >
                <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </div>
          ) : (
            // Small screen: avatar with dropdown menu
            <div className="ml-auto relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center gap-1 btn btn-ghost btn-circle focus:outline-none"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-label="Open user menu"
              >
                <div className="avatar">
                  <div className="w-9 rounded-full">
                    <img
                      src={authUser?.profilePic}
                      alt="User Avatar"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 text-base-content opacity-70" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-base-100 border border-base-300 z-40">
                  <div className="py-2 flex flex-col space-y-2 px-3">
                    <Link
                      to="/notification"
                      className="flex items-center gap-2 p-2 rounded hover:bg-base-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <BellIcon className="w-5 h-5" />
                      <span>Notifications</span>
                    </Link>

                    {/* Use DropDownMenu for theme toggle inside dropdown on small screens */}
                    <DropDownMenu />

                    <div className="flex items-center gap-3 p-2 cursor-default select-none border-t border-base-300 pt-2">
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img
                            src={authUser?.profilePic}
                            alt="User Avatar"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{authUser?.fullName}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        logoutMutation();
                        setDropdownOpen(false);
                      }}
                      className="btn btn-ghost w-full justify-start"
                      aria-label="Logout"
                    >
                      <LogOutIcon className="w-5 h-5 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
