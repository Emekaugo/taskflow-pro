export type AnalyticsTitle =
  | "Projects"
  | "Tasks Completed"
  | "Pending Tasks"
  | "Team Members";

export interface AnalyticsStat {
  id: number;

  title: AnalyticsTitle;

  value: number;

  unit?: string;

  change: number;

  trend: "up" | "down";

  description: string;
}

export interface Activity {
  id: number;

  title: string;

  description: string;

  time: string;

  type: "project" | "task" | "calendar" | "team";
}

export interface QuickAction {
  id: number;

  title: string;

  description: string;
}

export const analyticsStats: AnalyticsStat[] = [
  {
    id: 1,

    title: "Projects",

    value: 12,

    change: 18,

    trend: "up",

    description: "Active projects",
  },

  {
    id: 2,

    title: "Tasks Completed",

    value: 148,

    change: 12,

    trend: "up",

    description: "Completed this month",
  },

  {
    id: 3,

    title: "Pending Tasks",

    value: 27,

    change: 8,

    trend: "down",

    description: "Still outstanding",
  },

  {
    id: 4,

    title: "Team Members",

    value: 16,

    change: 6,

    trend: "up",

    description: "Workspace members",
  },
];

export const recentActivities: Activity[] = [
  {
    id: 1,

    title: "Website Redesign",

    description: "Project status updated to In Progress.",

    time: "10 mins ago",

    type: "project",
  },

  {
    id: 2,

    title: "Landing Page UI",

    description: "Task marked as completed.",

    time: "35 mins ago",

    type: "task",
  },

  {
    id: 3,

    title: "Sprint Planning",

    description: "New calendar event created.",

    time: "2 hours ago",

    type: "calendar",
  },

  {
    id: 4,

    title: "Sarah Johnson",

    description: "Joined the Design Team.",

    time: "Yesterday",

    type: "team",
  },

  {
    id: 5,

    title: "API Integration",

    description: "Project deadline extended.",

    time: "2 days ago",

    type: "project",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: 1,

    title: "New Project",

    description: "Create a new workspace project.",
  },

  {
    id: 2,

    title: "Add Task",

    description: "Create a task for your team.",
  },

  {
    id: 3,

    title: "Invite Member",

    description: "Collaborate with teammates.",
  },

  {
    id: 4,

    title: "Schedule Meeting",

    description: "Add a new calendar event.",
  },
];
