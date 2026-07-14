import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import AddTaskModal from "../../components/board/AddTaskModal";
import TaskBoard from "../../components/board/TaskBoard";

import useApp from "../../contexts/useApp";

import type { Task } from "../../data/tasks";

function Board() {
  const { tasks, setTasks } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddTask(task: Task) {
    setTasks((previousTasks) => [task, ...previousTasks]);
  }

  function handleDeleteTask(id: number) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Kanban Board</h1>

          <p className="mt-2 text-slate-400">
            Organize, prioritize and track your team's work.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <FaPlus />

          <span>Add Task</span>
        </button>
      </section>

      {/* Task Board */}

      <TaskBoard tasks={tasks} onDelete={handleDeleteTask} />

      {/* Modal */}

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
}

export default Board;
