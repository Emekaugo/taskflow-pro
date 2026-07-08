export interface Project {
  id: number;
  name: string;
  description: string;
  status: "Active" | "Completed" | "On Hold";
  members: number;
  tasks: number;
  progress: number;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "TaskFlow Pro",
    description:
      "Develop a modern Kanban project management application using React, TypeScript and Tailwind CSS.",
    status: "Active",
    members: 4,
    tasks: 32,
    progress: 65,
  },
  {
    id: 2,
    name: "CUN Reader",
    description:
      "RSS reader application inspired by Google Reader with feed management and article bookmarking.",
    status: "Completed",
    members: 2,
    tasks: 24,
    progress: 100,
  },
  {
    id: 3,
    name: "Company Website",
    description:
      "Corporate website redesign with improved accessibility and responsive layouts.",
    status: "Active",
    members: 6,
    tasks: 18,
    progress: 48,
  },
  {
    id: 4,
    name: "Customer Portal",
    description:
      "Portal for customers to manage subscriptions, invoices and support tickets.",
    status: "On Hold",
    members: 5,
    tasks: 27,
    progress: 34,
  },
  {
    id: 5,
    name: "Mobile Banking UI",
    description:
      "Design and implementation of a modern banking dashboard for mobile users.",
    status: "Active",
    members: 3,
    tasks: 21,
    progress: 82,
  },
  {
    id: 6,
    name: "HR Management System",
    description:
      "Internal application for employee management, leave requests and performance reviews.",
    status: "Completed",
    members: 7,
    tasks: 40,
    progress: 100,
  },
  {
    id: 7,
    name: "Inventory Dashboard",
    description:
      "Dashboard for monitoring inventory levels, suppliers and warehouse operations.",
    status: "Active",
    members: 4,
    tasks: 16,
    progress: 57,
  },
  {
    id: 8,
    name: "Analytics Platform",
    description:
      "Business intelligence dashboard with charts, KPIs and reporting features.",
    status: "On Hold",
    members: 8,
    tasks: 45,
    progress: 22,
  },
];
