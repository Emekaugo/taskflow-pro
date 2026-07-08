interface ProjectStatusBadgeProps {
  status: "Active" | "Completed" | "On Hold";
}

const statusStyles = {
  Active: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  Completed: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  "On Hold": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
};

function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const styles = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles.bg} ${styles.text} ${styles.border}`}
    >
      {status}
    </span>
  );
}

export default ProjectStatusBadge;
