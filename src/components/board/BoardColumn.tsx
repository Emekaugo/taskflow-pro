import type { TaskStatus, Task } from "../../data/tasks";
import TaskCard from "./TaskCard";

interface BoardColumnProps {
  title: TaskStatus;
  tasks: Task[];
}

function BoardColumn({ title, tasks }: BoardColumnProps) {
  return (
    <div className="flex min-h-[650px] flex-col rounded-2xl border border-slate-800 bg-slate-900">
      {/* Header */}

      <div className="border-b border-slate-800 px-5 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">{title}</h2>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-300">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Tasks */}

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {tasks.length === 0 ? (
          <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-slate-700">
            <p className="text-sm text-slate-500">No tasks</p>
          </div>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}

export default BoardColumn;
