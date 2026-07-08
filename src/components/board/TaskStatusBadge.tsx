interface TaskStatusBadgeProps {
  status: "To Do" | "In Progress" | "Review" | "Done";
}

const statusStyles = {
  "To Do": {
    bg: "bg-slate-500/10",
    text: "text-slate-300",
    border: "border-slate-500/20",
  },
  "In Progress": {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  Review: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  Done: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
};

function TaskStatusBadge({ status }: TaskStatusBadgeProps) {
  const styles = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles.bg} ${styles.text} ${styles.border}`}
    >
      {status}
    </span>
  );
}

export default TaskStatusBadge;
