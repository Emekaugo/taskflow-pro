import {
  FaChartLine,
  FaFolder,
  FaTableColumns,
  FaCalendarDays,
  FaUsers,
  FaGear,
} from "react-icons/fa6";

import type { NavigationItem } from "../types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FaChartLine,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FaFolder,
  },
  {
    name: "Board",
    path: "/board",
    icon: FaTableColumns,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: FaCalendarDays,
  },
  {
    name: "Team",
    path: "/team",
    icon: FaUsers,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FaGear,
  },
];
