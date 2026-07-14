import type { Project } from "../../data/projects";

import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onDelete: (id: number) => void;
}

function ProjectGrid({ projects, onDelete }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <section className="flex h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900">
        <h2 className="text-2xl font-semibold text-white">No Projects Found</h2>

        <p className="mt-3 text-slate-400">
          Try creating a new project or adjusting your search.
        </p>
      </section>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onDelete={onDelete} />
      ))}
    </section>
  );
}

export default ProjectGrid;
