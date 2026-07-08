export interface DashboardStats {
  projects: number;
  tasks: number;
  completed: number;
  members: number;
}

export interface ActivityItem {
  id: number;
  title: string;
  description: string;
  time: string;
}

export interface QuickAction {
  id: number;
  title: string;
  description: string;
}

export const dashboardStats: DashboardStats = {
  projects: 8,
  tasks: 42,
  completed: 26,
  members: 12,
};

export const recentActivities: ActivityItem[] = [
  {
    id: 1,
    title: "Project Created",
    description: "Website Redesign project was created.",
    time: "10 minutes ago",
  },
  {
    id: 2,
    title: "Task Completed",
    description: "Homepage UI task was marked as completed.",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Member Added",
    description: "John Doe joined the Marketing workspace.",
    time: "3 hours ago",
  },
  {
    id: 4,
    title: "Board Updated",
    description: "Sprint Board was updated with new tasks.",
    time: "Yesterday",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: 1,
    title: "New Project",
    description: "Create a brand new project.",
  },
  {
    id: 2,
    title: "New Task",
    description: "Add a task to your workspace.",
  },
  {
    id: 3,
    title: "Invite Member",
    description: "Add someone to your team.",
  },
];
