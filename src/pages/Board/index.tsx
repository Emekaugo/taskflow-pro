import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import AddTaskModal from "../../components/board/AddTaskModal";
import TaskBoard from "../../components/board/TaskBoard";

import { tasks } from "../../data/tasks";

function Board() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="space-y-8">
        {/* Header */}

        <section className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Kanban Board</h1>

            <p className="mt-2 text-slate-400">
              Organize your work and track progress across every stage.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <FaPlus />

            <span>New Task</span>
          </button>
        </section>

        {/* Board */}

        <TaskBoard tasks={tasks} />
      </div>

      <AddTaskModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Board;
