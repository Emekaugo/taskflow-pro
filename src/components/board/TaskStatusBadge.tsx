import type { TaskStatus } from "../../data/tasks";

interface TaskStatusBadgeProps {
  status: TaskStatus;
}

function TaskStatusBadge({ status }: TaskStatusBadgeProps) {
  const statusStyles: Record<TaskStatus, string> = {
    Todo: "bg-slate-700/50 text-slate-300 border border-slate-600",

    "In Progress": "bg-blue-500/10 text-blue-400 border border-blue-500/20",

    Done: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default TaskStatusBadge;
