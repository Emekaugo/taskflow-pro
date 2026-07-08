import type { Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white">
            No Projects Found
          </h3>

          <p className="mt-2 text-slate-400">
            Try changing your search or create a new project.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;
