import type { IconType } from "react-icons";
import {
  FaCalendarDays,
  FaClipboardCheck,
  FaDiagramProject,
  FaUsers,
} from "react-icons/fa6";

import StatCard from "./StatCard";

import { analyticsStats, type AnalyticsTitle } from "../../data/analytics";

const statIcons: Record<AnalyticsTitle, IconType> = {
  Projects: FaDiagramProject,

  "Tasks Completed": FaClipboardCheck,

  "Pending Tasks": FaCalendarDays,

  "Team Members": FaUsers,
};

const statColors: Record<AnalyticsTitle, string> = {
  Projects: "text-blue-400",

  "Tasks Completed": "text-emerald-400",

  "Pending Tasks": "text-amber-400",

  "Team Members": "text-purple-400",
};

function AnalyticsGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {analyticsStats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={statIcons[stat.title]}
          color={statColors[stat.title]}
          change={stat.change}
          trend={stat.trend}
          description={stat.description}
          unit={stat.unit}
        />
      ))}
    </section>
  );
}

export default AnalyticsGrid;
