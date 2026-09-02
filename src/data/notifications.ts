export type NotificationType = "success" | "warning" | "info" | "error";

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
  createdAt: string;
  read: boolean;
}

export const notifications: Notification[] = [
  {
    id: 1,
    title: "Task Completed",
    message: 'Task "Authentication Module" was completed.',
    type: "success",
    createdAt: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Project Updated",
    message: "Finance Dashboard moved to In Progress.",
    type: "info",
    createdAt: "15 min ago",
    read: false,
  },
  {
    id: 3,
    title: "Upcoming Deadline",
    message: "TaskFlow Pro is due tomorrow.",
    type: "warning",
    createdAt: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    title: "Server Alert",
    message: "API latency exceeded expected threshold.",
    type: "error",
    createdAt: "3 hours ago",
    read: true,
  },
  {
    id: 5,
    title: "New Team Member",
    message: "Michael Brown joined Engineering.",
    type: "success",
    createdAt: "Yesterday",
    read: true,
  },
];

export function getUnreadNotifications(notifications: Notification[]) {
  return notifications.filter((notification) => !notification.read);
}

export function getUnreadCount(notifications: Notification[]) {
  return getUnreadNotifications(notifications).length;
}

export function markAsRead(notifications: Notification[], id: number) {
  return notifications.map((notification) =>
    notification.id === id
      ? {
          ...notification,
          read: true,
        }
      : notification,
  );
}

export function markAllAsRead(notifications: Notification[]) {
  return notifications.map((notification) => ({
    ...notification,
    read: true,
  }));
}
