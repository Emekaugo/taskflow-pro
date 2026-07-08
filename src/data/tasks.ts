export type TaskStatus = "To Do" | "In Progress" | "Review" | "Done";

export type TaskPriority = "Low" | "Medium" | "High";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string;
  dueDate: string;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Design Dashboard",
    description:
      "Create the dashboard layout and KPI cards for the application.",
    status: "To Do",
    priority: "High",
    assignee: "Chukwuemeka",
    dueDate: "Sep 10",
  },
  {
    id: 2,
    title: "Authentication UI",
    description: "Build the login and registration pages with validation.",
    status: "To Do",
    priority: "Medium",
    assignee: "John Doe",
    dueDate: "Sep 12",
  },
  {
    id: 3,
    title: "Projects Module",
    description: "Implement project cards, search functionality and filtering.",
    status: "In Progress",
    priority: "High",
    assignee: "Chukwuemeka",
    dueDate: "Sep 09",
  },
  {
    id: 4,
    title: "Team Management",
    description: "Develop the team members page with invite functionality.",
    status: "In Progress",
    priority: "Medium",
    assignee: "Sarah",
    dueDate: "Sep 15",
  },
  {
    id: 5,
    title: "Calendar View",
    description: "Implement monthly calendar with upcoming deadlines.",
    status: "Review",
    priority: "Low",
    assignee: "David",
    dueDate: "Sep 18",
  },
  {
    id: 6,
    title: "Dark Theme",
    description: "Review dark theme consistency across all pages.",
    status: "Review",
    priority: "Medium",
    assignee: "Michael",
    dueDate: "Sep 11",
  },
  {
    id: 7,
    title: "Deploy API",
    description: "Deploy backend services and configure environment variables.",
    status: "Done",
    priority: "High",
    assignee: "Emma",
    dueDate: "Sep 03",
  },
  {
    id: 8,
    title: "Project Documentation",
    description: "Complete README documentation and setup instructions.",
    status: "Done",
    priority: "Low",
    assignee: "Chukwuemeka",
    dueDate: "Sep 05",
  },
  {
    id: 9,
    title: "Notifications",
    description: "Implement notification dropdown and unread indicators.",
    status: "To Do",
    priority: "Medium",
    assignee: "James",
    dueDate: "Sep 14",
  },
  {
    id: 10,
    title: "Settings Page",
    description: "Build profile settings and account preferences page.",
    status: "In Progress",
    priority: "Low",
    assignee: "Sophia",
    dueDate: "Sep 16",
  },
];
