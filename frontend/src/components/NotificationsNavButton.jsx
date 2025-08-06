import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFriendRequests } from "../lib/api";
import { BellIcon } from "lucide-react";

const NotificationsNavButton = () => {
  const { data: friendRequests } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });
  const count = friendRequests?.incomingRequests?.length || 0;

  return (
    <Link to="/notification" className="relative btn btn-ghost btn-circle" aria-label="Notifications">
      <BellIcon className="w-6 h-6 text-base-content opacity-70" />
      {count > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            bg-error text-white text-xs font-bold
            rounded-full px-1.5 py-0.5
            border-2 border-base-100
            shadow
            animate-bounce
            min-w-[18px] text-center
          "
          title={`${count} new friend request${count > 1 ? "s" : ""}`}
        >
          +{count}
        </span>
      )}
    </Link>
  );
};

export default NotificationsNavButton;
