import type { ReactNode } from "react";

import { AppContext } from "./AppContext";

import useLocalStorage from "../hooks/useLocalStorage";

import { projects } from "../data/projects";
import { tasks } from "../data/tasks";
import { calendarEvents } from "../data/calendar";
import { teamMembers } from "../data/team";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const [projectList, setProjects] = useLocalStorage("projects", projects);

  const [taskList, setTasks] = useLocalStorage("tasks", tasks);

  const [eventList, setEvents] = useLocalStorage("events", calendarEvents);

  const [memberList, setMembers] = useLocalStorage("members", teamMembers);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
