import type { Project } from "../data/projects";
import type { Task } from "../data/tasks";
import type { CalendarEvent } from "../data/calendar";
import type { TeamMember } from "../data/team";
import type { AppSettings } from "../data/settings";

export interface AppContextType {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;

  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;

  events: CalendarEvent[];
  setEvents: React.Dispatch<React.SetStateAction<CalendarEvent[]>>;

  members: TeamMember[];
  setMembers: React.Dispatch<React.SetStateAction<TeamMember[]>>;

  settings: AppSettings;
  setSettings: React.Dispatch<React.SetStateAction<AppSettings>>;
}
