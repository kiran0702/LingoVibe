import { Link, useLocation } from "react-router-dom"; // Note: react-router-dom, not "react-router"
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, SparklesIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";
import NotificationsNavButton from "./NotificationsNavButton";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full">
          {/* LOGO - ONLY IN THE CHAT PAGE */}
          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <SparklesIcon className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  LingoVibe
                </span>
              </Link>
            </div>
          )}

          {/* All action icons and avatar grouped and nicely spaced, positioned to the right */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Notification icon */}
            <Link to="/notification">
              <NotificationsNavButton/>
            </Link>
            
            {/* Theme selector */}
            <ThemeSelector />
            
            {/* User avatar */}
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src={authUser?.profilePic} alt="User Avatar" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* Logout */}
            <button className="btn btn-ghost btn-circle" onClick={logoutMutation} aria-label="Logout">
              <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
