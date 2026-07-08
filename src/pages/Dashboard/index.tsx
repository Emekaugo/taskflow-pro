import {
  FaChartLine,
  FaFolderOpen,
  FaListCheck,
  FaUsers,
} from "react-icons/fa6";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import StatCard from "../../components/dashboard/StatCard";
import { dashboardStats } from "../../data/dashboard";

function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}

      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>

          <p className="mt-2 text-slate-400">
            Welcome back. Here's an overview of your workspace.
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          + New Project
        </button>
      </section>

      {/* Statistics */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Projects"
          value={dashboardStats.projects}
          icon={FaFolderOpen}
          color="blue"
        />

        <StatCard
          title="Tasks"
          value={dashboardStats.tasks}
          icon={FaListCheck}
          color="emerald"
        />

        <StatCard
          title="Completed"
          value={dashboardStats.completed}
          icon={FaChartLine}
          color="amber"
        />

        <StatCard
          title="Team Members"
          value={dashboardStats.members}
          icon={FaUsers}
          color="purple"
        />
      </section>

      {/* Bottom Section */}

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentActivity />
        </div>

        <div>
          <QuickActions />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
