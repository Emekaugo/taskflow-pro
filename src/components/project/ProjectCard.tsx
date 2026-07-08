import { FaArrowRight, FaListCheck, FaUsers } from "react-icons/fa6";

import type { Project } from "../../data/projects";

import ProjectStatusBadge from "./ProjectStatusBadge";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
            {project.description}
          </p>
        </div>

        <ProjectStatusBadge status={project.status} />
      </div>

      {/* Progress */}

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-slate-400">Progress</span>

          <span className="text-sm font-semibold text-white">
            {project.progress}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-300"
            style={{
              width: `${project.progress}%`,
            }}
          />
        </div>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <FaUsers />

            <span>{project.members}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <FaListCheck />

            <span>{project.tasks}</span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          View
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
