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
    section: "overview",
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FaFolder,
    section: "workspace",
  },
  {
    name: "Board",
    path: "/board",
    icon: FaTableColumns,
    section: "workspace",
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: FaCalendarDays,
    section: "workspace",
  },
  {
    name: "Team",
    path: "/team",
    icon: FaUsers,
    section: "team",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FaGear,
    section: "account",
  },
];
