import { FaCircleCheck } from "react-icons/fa6";

import type { Task } from "../../data/tasks";

interface TodayTasksProps {
  tasks: Task[];
}

function TodayTasks({ tasks }: TodayTasksProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Today's Tasks</h2>

        <p className="mt-1 text-sm text-slate-400">
          Tasks requiring your attention today.
        </p>
      </div>

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-sm text-slate-500">No tasks scheduled.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"
            >
              <div>
                <h3 className="font-medium text-white">{task.title}</h3>

                <p className="mt-1 text-sm text-slate-400">{task.status}</p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  task.status === "Done"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : task.status === "In Progress"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-amber-500/20 text-amber-400"
                }`}
              >
                {task.status}
              </span>
            </div>
          ))
        )}
      </div>

      {tasks.length > 0 && (
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <FaCircleCheck />
          View All Tasks
        </button>
      )}
    </section>
  );
}

export default TodayTasks;
