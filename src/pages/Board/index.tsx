import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import AddTaskModal from "../../components/board/AddTaskModal";
import TaskBoard from "../../components/board/TaskBoard";

import useApp from "../../contexts/useApp";

import type { Task } from "../../data/tasks";

function Board() {
  const { setTasks } = useApp();

  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  function handleAddTask(task: Task) {
    setTasks((currentTasks) => [...currentTasks, task]);
    setIsAddTaskModalOpen(false);
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Task Board</h1>

            <p className="mt-2 text-sm text-slate-400">
              Manage your tasks and move them between columns using drag and
              drop.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsAddTaskModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <FaPlus />
            Add Task
          </button>
        </div>

        {/* Task Board */}

        <TaskBoard />

        {/* Add Task Modal */}

        <AddTaskModal
          isOpen={isAddTaskModalOpen}
          onClose={() => setIsAddTaskModalOpen(false)}
          onAddTask={handleAddTask}
        />
      </div>
    </div>
  );
}

export default Board;
