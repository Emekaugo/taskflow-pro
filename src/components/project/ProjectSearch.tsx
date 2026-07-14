import { FaMagnifyingGlass } from "react-icons/fa6";

import type { ProjectStatus } from "../../data/projects";

interface ProjectSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;

  selectedStatus: "All" | ProjectStatus;
  onStatusChange: (value: "All" | ProjectStatus) => void;
}

function ProjectSearch({
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
}: ProjectSearchProps) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}

      <div className="relative w-full lg:max-w-md">
        <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

        <input
          type="text"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search projects..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Status Filter */}

      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-slate-300">Status</label>

        <select
          value={selectedStatus}
          onChange={(event) =>
            onStatusChange(event.target.value as "All" | ProjectStatus)
          }
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        >
          <option value="All">All</option>

          <option value="Planning">Planning</option>

          <option value="In Progress">In Progress</option>

          <option value="Completed">Completed</option>
        </select>
      </div>
    </section>
  );
}

export default ProjectSearch;
