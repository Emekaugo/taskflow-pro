import type { CalendarEvent } from "./calendar";
import type { Project } from "./projects";
import type { Task } from "./tasks";
import type { TeamMember } from "./team";

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

export function getTodayTasks(tasks: Task[]) {
  return tasks.slice(0, 5);
}

export function getRecentProjects(projects: Project[]) {
  return projects.slice(0, 4);
}

export function getUpcomingDeadlines(events: CalendarEvent[]) {
  return events.slice(0, 5);
}

export function getTeamOverview(members: TeamMember[]) {
  return members.slice(0, 6);
}
