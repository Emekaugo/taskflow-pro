import AnalyticsGrid from "../../components/dashboard/AnalyticsGrid";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import RecentProjects from "../../components/dashboard/RecentProjects";
import TeamOverview from "../../components/dashboard/TeamOverview";
import TodayTasks from "../../components/dashboard/TodayTasks";
import UpcomingDeadlines from "../../components/dashboard/UpcomingDeadlines";

import ProjectStatusChart from "../../components/dashboard/charts/ProjectStatusChart";
import TaskProgressChart from "../../components/dashboard/charts/TaskProgressChart";
import WeeklyProductivityChart from "../../components/dashboard/charts/WeeklyProductivityChart";

import { projects } from "../../data/projects";
import { tasks } from "../../data/tasks";
import { teamMembers } from "../../data/team";
import { calendarEvents } from "../../data/calendar";

import {
  getRecentProjects,
  getTeamOverview,
  getTodayTasks,
  getUpcomingDeadlines,
} from "../../data/dashboard";

function Dashboard() {
  const todayTasks = getTodayTasks(tasks);

  const recentProjects = getRecentProjects(projects);

  const upcomingDeadlines = getUpcomingDeadlines(calendarEvents);

  const teamOverview = getTeamOverview(teamMembers);

  return (
    <main className="space-y-8">
      {/* Header */}

      <section className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>

          <p className="mt-2 text-slate-400">
            Welcome back! Here's an overview of your workspace.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4">
          <p className="text-sm text-slate-500">Workspace Status</p>

          <p className="mt-1 text-lg font-semibold text-emerald-400">
            All systems operational
          </p>
        </div>
      </section>

      {/* KPI Cards */}

      <AnalyticsGrid />

      {/* Charts */}

      <section className="grid gap-8 xl:grid-cols-2">
        <ProjectStatusChart />

        <TaskProgressChart />
      </section>

      <WeeklyProductivityChart />

      {/* Workspace Widgets */}

      <section className="grid gap-8 xl:grid-cols-2">
        <TodayTasks tasks={todayTasks} />

        <UpcomingDeadlines events={upcomingDeadlines} />
      </section>

      <section className="grid gap-8 xl:grid-cols-2">
        <RecentProjects projects={recentProjects} />

        <TeamOverview members={teamOverview} />
      </section>

      {/* Bottom */}

      <section className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentActivity />
        </div>

        <QuickActions />
      </section>
    </main>
  );
}

export default Dashboard;
