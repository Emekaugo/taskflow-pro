import type { ProjectStatus } from "../../data/projects";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const statusStyles: Record<ProjectStatus, string> = {
    Planning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",

    "In Progress": "bg-blue-500/10 text-blue-400 border border-blue-500/20",

    Completed:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default ProjectStatusBadge;
