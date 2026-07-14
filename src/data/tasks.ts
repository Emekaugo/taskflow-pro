export type TaskStatus = "Todo" | "In Progress" | "Done";

export interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: TaskStatus;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Design Dashboard",
    description: "Create the initial dashboard layout and statistics cards.",
    assignee: "Chukwuemeka",
    dueDate: "2026-07-12",
    priority: "High",
    status: "Todo",
  },
  {
    id: 2,
    title: "Build Authentication",
    description: "Implement login and registration pages.",
    assignee: "Sarah",
    dueDate: "2026-07-15",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 3,
    title: "API Integration",
    description: "Connect frontend with backend REST endpoints.",
    assignee: "Daniel",
    dueDate: "2026-07-18",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Write Documentation",
    description: "Prepare developer documentation for the project.",
    assignee: "Grace",
    dueDate: "2026-07-20",
    priority: "Low",
    status: "Done",
  },
  {
    id: 5,
    title: "Testing",
    description: "Perform application testing before deployment.",
    assignee: "Michael",
    dueDate: "2026-07-22",
    priority: "Medium",
    status: "Todo",
  },
];

export function filterTasksByStatus(tasks: Task[], status: TaskStatus) {
  return tasks.filter((task) => task.status === status);
}

export function getTaskCounts(tasks: Task[]) {
  return {
    todo: tasks.filter((task) => task.status === "Todo").length,

    inProgress: tasks.filter((task) => task.status === "In Progress").length,

    done: tasks.filter((task) => task.status === "Done").length,
  };
}
