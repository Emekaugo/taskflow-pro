import { FaCalendarDays, FaGripLines, FaTrash, FaUser } from "react-icons/fa6";

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

  function handleDragStart(event: React.DragEvent<HTMLElement>) {
    event.dataTransfer.setData("text/plain", task.id.toString());

    event.dataTransfer.effectAllowed = "move";

    event.currentTarget.classList.add("opacity-50", "scale-[0.98]");
  }

  function handleDragEnd(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.classList.remove("opacity-50", "scale-[0.98]");
  }

  return (
    <article
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="group cursor-grab rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg active:cursor-grabbing"
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <span
            title="Drag to move task"
            aria-label="Drag to move task"
            className="mt-1 shrink-0 text-slate-600 transition-colors group-hover:text-slate-400"
          >
            <FaGripLines />
          </span>

          <div className="min-w-0">
            <h3 className="break-words text-lg font-semibold text-white">
              {task.title}
            </h3>

            <p className="mt-2 break-words text-sm leading-6 text-slate-400">
              {task.description}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
          title="Delete task"
          className="shrink-0 rounded-lg p-2 text-red-400 transition hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <FaTrash />
        </button>
      </div>

      {/* Status & Priority */}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
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
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
          <div className="flex min-w-0 items-center gap-2">
            <FaUser className="shrink-0 text-blue-400" />

            <span className="truncate">{task.assignee}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarDays className="shrink-0 text-amber-400" />

            <span className="whitespace-nowrap">{task.dueDate}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
