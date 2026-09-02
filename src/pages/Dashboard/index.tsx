import { useMemo, useState } from "react";

import AnalyticsGrid from "../../components/dashboard/AnalyticsGrid";
import FilterBar from "../../components/dashboard/FilterBar";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import RecentProjects from "../../components/dashboard/RecentProjects";
import SearchResults from "../../components/dashboard/SearchResults";
import TeamOverview from "../../components/dashboard/TeamOverview";
import TodayTasks from "../../components/dashboard/TodayTasks";
import UpcomingDeadlines from "../../components/dashboard/UpcomingDeadlines";

import ProjectStatusChart from "../../components/dashboard/charts/ProjectStatusChart";
import TaskProgressChart from "../../components/dashboard/charts/TaskProgressChart";
import WeeklyProductivityChart from "../../components/dashboard/charts/WeeklyProductivityChart";

import useSearch from "../../hooks/useSearch";

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
  const [statusFilter, setStatusFilter] = useState("All");

  const {
    query,
    setQuery,
    filteredItems: filteredProjects,
    hasQuery,
  } = useSearch(
    projects,
    (project, search) =>
      project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search),
  );

  const recentProjects = useMemo(() => {
    if (statusFilter === "All") {
      return getRecentProjects(filteredProjects);
    }

    return filteredProjects.filter(
      (project) => project.status === statusFilter,
    );
  }, [filteredProjects, statusFilter]);

  return (
    <main className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>

        <p className="mt-2 text-slate-400">Welcome back.</p>
      </section>

      {/* Temporary Search */}

      <input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-blue-500"
      />

      <FilterBar
        title="Project Status"
        value={statusFilter}
        onChange={setStatusFilter}
        options={[
          {
            label: "All",
            value: "All",
          },
          {
            label: "Planning",
            value: "Planning",
          },
          {
            label: "In Progress",
            value: "In Progress",
          },
          {
            label: "Completed",
            value: "Completed",
          },
        ]}
      />

      {hasQuery && (
        <SearchResults
          title="Project Results"
          results={filteredProjects}
          getKey={(project) => project.id}
          renderItem={(project) => (
            <>
              <h3 className="font-semibold text-white">{project.name}</h3>

              <p className="text-slate-400">{project.description}</p>
            </>
          )}
        />
      )}

      <AnalyticsGrid />

      <section className="grid gap-8 xl:grid-cols-2">
        <ProjectStatusChart />
        <TaskProgressChart />
      </section>

      <WeeklyProductivityChart />

      <section className="grid gap-8 xl:grid-cols-2">
        <TodayTasks tasks={getTodayTasks(tasks)} />

        <UpcomingDeadlines events={getUpcomingDeadlines(calendarEvents)} />
      </section>

      <section className="grid gap-8 xl:grid-cols-2">
        <RecentProjects projects={recentProjects} />

        <TeamOverview members={getTeamOverview(teamMembers)} />
      </section>

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
