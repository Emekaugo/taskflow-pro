import NotificationItem from "./NotificationItem";

import type { Notification } from "../../data/notifications";

interface NotificationPanelProps {
  notifications: Notification[];

  onNotificationClick?: (id: number) => void;

  onMarkAllRead?: () => void;
}

function NotificationPanel({
  notifications,
  onNotificationClick,
  onMarkAllRead,
}: NotificationPanelProps) {
  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  return (
    <div className="absolute right-0 top-14 z-50 w-[380px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
        <div>
          <h2 className="font-semibold text-white">Notifications</h2>

          <p className="mt-1 text-xs text-slate-400">{unreadCount} unread</p>
        </div>

        <button
          type="button"
          onClick={onMarkAllRead}
          className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          Mark all as read
        </button>
      </div>

      {/* Body */}

      <div className="max-h-[420px] space-y-3 overflow-y-auto p-4">
        {notifications.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-medium text-slate-300">No notifications</p>

            <p className="mt-2 text-sm text-slate-500">You're all caught up.</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onClick={onNotificationClick}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationPanel;
