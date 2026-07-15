import type { ReactNode } from "react";

import { AppContext } from "./AppContext";

import useLocalStorage from "../hooks/useLocalStorage";

import { projects } from "../data/projects";
import { tasks } from "../data/tasks";
import { calendarEvents } from "../data/calendar";
import { teamMembers } from "../data/team";
import { defaultSettings } from "../data/settings";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const [projectList, setProjects] = useLocalStorage("projects", projects);

  const [taskList, setTasks] = useLocalStorage("tasks", tasks);

  const [eventList, setEvents] = useLocalStorage("events", calendarEvents);

  const [memberList, setMembers] = useLocalStorage("members", teamMembers);

  const [settings, setSettings] = useLocalStorage("settings", defaultSettings);

  return (
    <AppContext.Provider
      value={{
        projects: projectList,
        setProjects,

        tasks: taskList,
        setTasks,

        events: eventList,
        setEvents,

        members: memberList,
        setMembers,

        settings,
        setSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
