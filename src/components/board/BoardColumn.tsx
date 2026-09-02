import { useState } from "react";

import type { Task, TaskStatus } from "../../data/tasks";

import TaskCard from "./TaskCard";

interface BoardColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onDelete: (id: number) => void;
  onDropTask: (taskId: number, status: TaskStatus) => void;
}

function BoardColumn({
  title,
  status,
  tasks,
  onDelete,
  onDropTask,
}: BoardColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    event.dataTransfer.dropEffect = "move";

    if (!isDragOver) {
      setIsDragOver(true);
    }
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    if (event.currentTarget.contains(event.relatedTarget as Node)) {
      return;
    }

    setIsDragOver(false);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    setIsDragOver(false);

    const taskId = Number(event.dataTransfer.getData("text/plain"));

    if (!taskId) {
      return;
    }

    onDropTask(taskId, status);
  }

  return (
    <section
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`min-h-[500px] rounded-2xl border p-4 transition-all duration-200 ${
        isDragOver
          ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/5"
          : "border-slate-800 bg-slate-950"
      }`}
    >
      {/* Column Header */}

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-white">{title}</h2>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              isDragOver
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            {tasks.length}
          </span>
        </div>

        {isDragOver && (
          <span className="text-xs font-medium text-blue-400">Drop here</span>
        )}
      </div>

      {/* Drop Area */}

      <div
        className={`min-h-[420px] space-y-4 rounded-xl transition-colors ${
          isDragOver ? "bg-blue-500/5 p-2" : ""
        }`}
      >
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={onDelete} />
          ))
        ) : (
          <div
            className={`flex min-h-[180px] items-center justify-center rounded-xl border border-dashed transition-colors ${
              isDragOver
                ? "border-blue-500 text-blue-400"
                : "border-slate-800 text-slate-600"
            }`}
          >
            <p className="text-sm">
              {isDragOver ? "Drop task here" : "No tasks in this column"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default BoardColumn;
