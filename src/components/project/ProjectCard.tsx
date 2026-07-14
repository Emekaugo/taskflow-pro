import { FaCalendarDays, FaTrash, FaUsers } from "react-icons/fa6";

import type { Project } from "../../data/projects";

import ProjectStatusBadge from "./ProjectStatusBadge";

interface ProjectCardProps {
  project: Project;
  onDelete: (id: number) => void;
}

function ProjectCard({ project, onDelete }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
      {/* Top */}

      <div>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">{project.name}</h2>

          <ProjectStatusBadge status={project.status} />
        </div>

        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
      </div>

      {/* Bottom */}

      <div className="mt-8 border-t border-slate-800 pt-5">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FaCalendarDays className="text-blue-400" />

              <span>{project.dueDate}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FaUsers className="text-emerald-400" />

              <span>
                {project.members} Team Member
                {project.members !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onDelete(project.id)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 transition hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
