import { useEffect, useRef, useState } from "react";

import { FaBell } from "react-icons/fa6";

import NotificationPanel from "./NotificationPanel";

import {
  notifications as initialNotifications,
  getUnreadCount,
  markAllAsRead,
  markAsRead,
} from "../../data/notifications";

function NotificationBell() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleNotificationClick(id: number) {
    setNotifications((previous) => markAsRead(previous, id));
  }

  function handleMarkAllRead() {
    setNotifications((previous) => markAllAsRead(previous));
  }

  const unreadCount = getUnreadCount(notifications);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative text-xl text-slate-400 transition hover:text-white"
      >
        <FaBell />

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <NotificationPanel
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
          onMarkAllRead={handleMarkAllRead}
        />
      )}
    </div>
  );
}

export default NotificationBell;
