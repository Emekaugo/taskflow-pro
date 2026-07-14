import type { Task, TaskStatus } from "../../data/tasks";

import TaskCard from "./TaskCard";

interface BoardColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onDelete: (id: number) => void;
}

function BoardColumn({ title, status, tasks, onDelete }: BoardColumnProps) {
  return (
    <section className="flex min-h-[650px] flex-col rounded-2xl border border-slate-800 bg-slate-900">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 p-5">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>

          <p className="mt-1 text-sm text-slate-400">
            {tasks.length} Task
            {tasks.length !== 1 ? "s" : ""}
          </p>
        </div>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white">
          {tasks.length}
        </span>
      </div>

      {/* Tasks */}

      <div className="flex-1 space-y-4 p-5">
        {tasks.length === 0 ? (
          <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-slate-700">
            <p className="text-center text-sm text-slate-500">
              No{" "}
              {status === "Todo"
                ? "todo"
                : status === "In Progress"
                  ? "in-progress"
                  : "completed"}{" "}
              tasks.
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={onDelete} />
          ))
        )}
      </div>
    </section>
  );
}

export default BoardColumn;
