import type { Project } from "./projects";
import type { Task } from "./tasks";
import type { TeamMember } from "./team";
import type { CalendarEvent } from "./calendar";

interface DashboardStats {
  totalProjects: number;
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  totalMembers: number;
  upcomingEvents: number;
}

export function getDashboardStats(
  projects: Project[],
  tasks: Task[],
  members: TeamMember[],
  events: CalendarEvent[],
): DashboardStats {
  return {
    totalProjects: projects.length,

    totalTasks: tasks.length,

    completedTasks: tasks.filter((task) => task.status === "Done").length,

    pendingTasks: tasks.filter((task) => task.status !== "Done").length,

    totalMembers: members.length,

    upcomingEvents: events.length,
  };
}

export function getRecentActivity(tasks: Task[], projects: Project[]) {
  const taskActivities = tasks.slice(0, 3).map((task) => ({
    id: `task-${task.id}`,
    title: `Task "${task.title}" updated`,
    type: "Task",
  }));

  const projectActivities = projects.slice(0, 2).map((project) => ({
    id: `project-${project.id}`,
    title: `Project "${project.name}" active`,
    type: "Project",
  }));

  return [...taskActivities, ...projectActivities];
}
