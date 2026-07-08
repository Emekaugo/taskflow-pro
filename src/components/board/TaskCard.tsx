import { FaCalendarDays, FaCircleUser, FaFlag } from "react-icons/fa6";

import TaskStatusBadge from "./TaskStatusBadge";
import type { Task } from "../../data/tasks";

interface TaskCardProps {
  task: Task;
}

const priorityStyles = {
  Low: "text-emerald-400",
  Medium: "text-amber-400",
  High: "text-red-400",
};

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-start justify-between gap-3">
        <h3 className="flex-1 text-lg font-semibold text-white">
          {task.title}
        </h3>

        <TaskStatusBadge status={task.status} />
      </div>

      {/* Description */}

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
        {task.description}
      </p>

      {/* Priority */}

      <div className="mt-5 flex items-center gap-2">
        <FaFlag className={priorityStyles[task.priority]} />

        <span
          className={`text-sm font-medium ${priorityStyles[task.priority]}`}
        >
          {task.priority} Priority
        </span>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <FaCircleUser />

          <span>{task.assignee}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <FaCalendarDays />

          <span>{task.dueDate}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
