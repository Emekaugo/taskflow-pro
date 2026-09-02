import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

import type { Task, TaskStatus } from "../../data/tasks";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Task) => void;
}

function AddTaskModal({ isOpen, onClose, onAddTask }: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Medium");
  const [status, setStatus] = useState<TaskStatus>("Todo");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task title.");
      return;
    }

    if (!description.trim()) {
      setError("Please enter a task description.");
      return;
    }

    if (!assignee.trim()) {
      setError("Please enter an assignee.");
      return;
    }

    if (!dueDate) {
      setError("Please select a due date.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      assignee: assignee.trim(),
      priority,
      status,
      dueDate,
    };

    onAddTask(newTask);

    resetForm();
    onClose();
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setAssignee("");
    setPriority("Medium");
    setStatus("Todo");
    setDueDate("");
    setError("");
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-task-title"
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8"
      >
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2
              id="add-task-title"
              className="text-2xl font-semibold text-white"
            >
              Add New Task
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Fill in the details below to create a task.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaXmark className="text-xl" />
          </button>
        </div>

        {/* Validation Error */}

        {error && (
          <div
            role="alert"
            aria-live="polite"
            className="mb-6 flex items-center rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Task Title */}

          <div>
            <label
              htmlFor="task-title"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Task Title
            </label>

            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setError("");
              }}
              placeholder="Enter task title"
              className={`w-full rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:ring-1 ${
                error && !title.trim()
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Description */}

          <div>
            <label
              htmlFor="task-description"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Description
            </label>

            <textarea
              id="task-description"
              rows={4}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
                setError("");
              }}
              placeholder="Task description..."
              className={`w-full resize-none rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:ring-1 ${
                error && !description.trim()
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Assignee & Due Date */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="task-assignee"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Assignee
              </label>

              <input
                id="task-assignee"
                type="text"
                value={assignee}
                onChange={(event) => {
                  setAssignee(event.target.value);
                  setError("");
                }}
                placeholder="Assign to..."
                className={`w-full rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:ring-1 ${
                  error && !assignee.trim()
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="task-due-date"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Due Date
              </label>

              <input
                id="task-due-date"
                type="date"
                value={dueDate}
                onChange={(event) => {
                  setDueDate(event.target.value);
                  setError("");
                }}
                className={`w-full rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition focus:ring-1 ${
                  error && !dueDate
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
            </div>
          </div>

          {/* Priority & Status */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="task-priority"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Priority
              </label>

              <select
                id="task-priority"
                value={priority}
                onChange={(event) =>
                  setPriority(event.target.value as "Low" | "Medium" | "High")
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="task-status"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Status
              </label>

              <select
                id="task-status"
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as TaskStatus)
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>

          {/* Actions */}

          <div className="flex flex-col-reverse gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
