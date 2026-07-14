import {
  FaCalendarDays,
  FaFolder,
  FaListCheck,
  FaUsers,
} from "react-icons/fa6";

import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import StatCard from "../../components/dashboard/StatCard";

import { getDashboardStats, getRecentActivity } from "../../data/dashboard";
import useApp from "../../contexts/useApp";

function Dashboard() {
  const { projects, tasks, members, events } = useApp();

  const stats = getDashboardStats(projects, tasks, members, events);

  const activities = getRecentActivity(tasks, projects);

  return (
    <div className="space-y-8">
      {/* Header */}

      <section>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>

        <p className="mt-2 text-slate-400">
          Welcome back! Here's an overview of your workspace.
        </p>
      </section>

      {/* Statistics */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Projects"
          value={stats.totalProjects}
          icon={FaFolder}
          color="text-blue-400"
        />

        <StatCard
          title="Tasks"
          value={stats.totalTasks}
          icon={FaListCheck}
          color="text-emerald-400"
        />

        <StatCard
          title="Members"
          value={stats.totalMembers}
          icon={FaUsers}
          color="text-purple-400"
        />

        <StatCard
          title="Events"
          value={stats.upcomingEvents}
          icon={FaCalendarDays}
          color="text-amber-400"
        />
      </section>

      {/* Bottom Section */}

      <section className="grid gap-8 xl:grid-cols-[2fr_1fr]">
        <RecentActivity activities={activities} />

        <QuickActions />
      </section>
    </div>
  );
}

export default Dashboard;
