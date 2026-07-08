import { useMemo, useState } from "react";

import { projects } from "../../data/projects";
import ProjectGrid from "../../components/project/ProjectGrid";
import ProjectSearch from "../../components/project/ProjectSearch";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState<
    "All" | "Active" | "Completed" | "On Hold"
  >("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  return (
    <div className="space-y-8">
      {/* Header */}

      <section className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>

          <p className="mt-2 text-slate-400">
            Manage all your projects in one place.
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          + New Project
        </button>
      </section>

      {/* Search + Filter */}

      <section className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <ProjectSearch value={searchTerm} onChange={setSearchTerm} />

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(
              event.target.value as "All" | "Active" | "Completed" | "On Hold",
            )
          }
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        >
          <option value="All">All Projects</option>

          <option value="Active">Active</option>

          <option value="Completed">Completed</option>

          <option value="On Hold">On Hold</option>
        </select>
      </section>

      {/* Grid */}

      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}

export default Projects;
