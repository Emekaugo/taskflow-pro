export type ProjectStatus = "Planning" | "In Progress" | "Completed";

export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  dueDate: string;
  members: number;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "TaskFlow Pro",
    description: "Project management platform built with React and TypeScript.",
    status: "In Progress",
    dueDate: "2026-07-25",
    members: 6,
  },
  {
    id: 2,
    name: "Finance Dashboard",
    description: "Internal analytics dashboard for financial reporting.",
    status: "Planning",
    dueDate: "2026-08-10",
    members: 4,
  },
  {
    id: 3,
    name: "HR Portal",
    description: "Employee self-service portal for HR operations.",
    status: "Completed",
    dueDate: "2026-06-15",
    members: 5,
  },
  {
    id: 4,
    name: "Inventory Management",
    description: "Warehouse inventory tracking application.",
    status: "In Progress",
    dueDate: "2026-08-05",
    members: 7,
  },
  {
    id: 5,
    name: "Customer CRM",
    description: "CRM system for customer engagement and support.",
    status: "Planning",
    dueDate: "2026-09-01",
    members: 8,
  },
];

export function searchProjects(projects: Project[], query: string) {
  if (!query.trim()) {
    return projects;
  }

  const search = query.toLowerCase();

  return projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search),
  );
}

export function filterProjectsByStatus(projects: Project[], status: string) {
  if (status === "All") {
    return projects;
  }

  return projects.filter((project) => project.status === status);
}
