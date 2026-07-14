import { FaCalendarDays, FaTrash, FaUser } from "react-icons/fa6";

import type { Task } from "../../data/tasks";

import TaskStatusBadge from "./TaskStatusBadge";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

function TaskCard({ task, onDelete }: TaskCardProps) {
  const priorityStyles = {
    Low: "text-emerald-400 bg-emerald-500/10",
    Medium: "text-amber-400 bg-amber-500/10",
    High: "text-red-400 bg-red-500/10",
  };

  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{task.title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {task.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="rounded-lg p-2 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <FaTrash />
        </button>
      </div>

      {/* Status & Priority */}

      <div className="mt-5 flex items-center justify-between">
        <TaskStatusBadge status={task.status} />

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            priorityStyles[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Footer */}

      <div className="mt-6 border-t border-slate-800 pt-4">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <FaUser className="text-blue-400" />

            <span>{task.assignee}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarDays className="text-amber-400" />

            <span>{task.dueDate}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
