import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleInfo,
  FaTriangleExclamation,
} from "react-icons/fa6";

import type { Notification, NotificationType } from "../../data/notifications";

interface NotificationItemProps {
  notification: Notification;

  onClick?: (id: number) => void;
}

const notificationIcons: Record<
  NotificationType,
  React.ComponentType<{ className?: string }>
> = {
  success: FaCircleCheck,

  info: FaCircleInfo,

  warning: FaTriangleExclamation,

  error: FaCircleExclamation,
};

const notificationColors: Record<NotificationType, string> = {
  success: "text-emerald-400",

  info: "text-blue-400",

  warning: "text-yellow-400",

  error: "text-red-400",
};

function NotificationItem({ notification, onClick }: NotificationItemProps) {
  const Icon = notificationIcons[notification.type];

  const color = notificationColors[notification.type];

  return (
    <button
      type="button"
      onClick={() => onClick?.(notification.id)}
      className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-200 hover:border-blue-500 ${
        notification.read
          ? "border-slate-800 bg-slate-900"
          : "border-blue-900 bg-blue-950/30"
      }`}
    >
      <div className="mt-1">
        <Icon className={`text-lg ${color}`} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold text-white">{notification.title}</h3>

          <span className="shrink-0 text-xs text-slate-500">
            {notification.createdAt}
          </span>
        </div>

        <p className="mt-1 text-sm text-slate-400">{notification.message}</p>
      </div>

      {!notification.read && (
        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
      )}
    </button>
  );
}

export default NotificationItem;
