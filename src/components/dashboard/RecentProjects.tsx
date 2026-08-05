import { FaArrowUpRightFromSquare, FaDiagramProject } from "react-icons/fa6";

import type { Project } from "../../data/projects";

interface RecentProjectsProps {
  projects: Project[];
}

const statusColors = {
  Planning: "bg-amber-500/20 text-amber-400",

  "In Progress": "bg-blue-500/20 text-blue-400",

  Completed: "bg-emerald-500/20 text-emerald-400",
};

function RecentProjects({ projects }: RecentProjectsProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Recent Projects</h2>

          <p className="mt-1 text-sm text-slate-400">
            Your latest active projects.
          </p>
        </div>

        <button
          type="button"
          className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {projects.length === 0 ? (
          <p className="text-sm text-slate-500">No projects available.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-blue-500"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20">
                    <FaDiagramProject className="text-blue-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{project.name}</h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {project.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="text-slate-500 transition hover:text-white"
                >
                  <FaArrowUpRightFromSquare />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    statusColors[project.status as keyof typeof statusColors]
                  }`}
                >
                  {project.status}
                </span>

                <span className="text-xs text-slate-500">
                  Due: {project.dueDate}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default RecentProjects;
