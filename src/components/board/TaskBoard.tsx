import {
  filterTasksByStatus,
  getTaskCounts,
  type Task,
} from "../../data/tasks";

import BoardColumn from "./BoardColumn";

interface TaskBoardProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

function TaskBoard({ tasks, onDelete }: TaskBoardProps) {
  const counts = getTaskCounts(tasks);

  const todoTasks = filterTasksByStatus(tasks, "Todo");

  const inProgressTasks = filterTasksByStatus(tasks, "In Progress");

  const completedTasks = filterTasksByStatus(tasks, "Done");

  return (
    <div className="space-y-6">
      {/* Summary */}

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-400">Todo</p>

          <h2 className="mt-2 text-3xl font-bold text-white">{counts.todo}</h2>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-400">
            In Progress
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-400">
            {counts.inProgress}
          </h2>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm uppercase tracking-wide text-slate-400">
            Completed
          </p>

          <h2 className="mt-2 text-3xl font-bold text-emerald-400">
            {counts.done}
          </h2>
        </div>
      </section>

      {/* Kanban Board */}

      <section className="grid gap-6 xl:grid-cols-3">
        <BoardColumn
          title="Todo"
          status="Todo"
          tasks={todoTasks}
          onDelete={onDelete}
        />

        <BoardColumn
          title="In Progress"
          status="In Progress"
          tasks={inProgressTasks}
          onDelete={onDelete}
        />

        <BoardColumn
          title="Done"
          status="Done"
          tasks={completedTasks}
          onDelete={onDelete}
        />
      </section>
    </div>
  );
}

export default TaskBoard;
