import { useState } from "react";
import {
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaXmark,
} from "react-icons/fa6";

import type { CalendarEvent } from "../../data/calendar";

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: CalendarEvent) => void;
}

function AddEventModal({ isOpen, onClose, onAddEvent }: AddEventModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const [error, setError] = useState("");

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please enter an event title.");
      return;
    }

    if (!description.trim()) {
      setError("Please enter an event description.");
      return;
    }

    if (!date) {
      setError("Please select an event date.");
      return;
    }

    if (!time) {
      setError("Please select an event time.");
      return;
    }

    if (!location.trim()) {
      setError("Please enter an event location.");
      return;
    }

    const newEvent: CalendarEvent = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      date,
      time,
      location: location.trim(),
    };

    onAddEvent(newEvent);

    resetForm();
    onClose();
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setLocation("");
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
        aria-labelledby="add-event-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-8"
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2
              id="add-event-title"
              className="text-xl font-semibold text-white sm:text-2xl"
            >
              Add New Event
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Create an event for your calendar.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            title="Close modal"
            className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <FaXmark aria-hidden="true" className="text-xl" />
          </button>
        </div>

        {error && (
          <div
            role="alert"
            aria-live="polite"
            className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label
              htmlFor="event-title"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Event Title
            </label>

            <input
              id="event-title"
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setError("");
              }}
              placeholder="Enter event title"
              className={`w-full rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:ring-1 ${
                error && !title.trim()
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="event-description"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Description
            </label>

            <textarea
              id="event-description"
              rows={4}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
                setError("");
              }}
              placeholder="Event description..."
              className={`w-full resize-none rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:ring-1 ${
                error && !description.trim()
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="event-date"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300"
              >
                <FaCalendarDays aria-hidden="true" className="text-blue-400" />
                Date
              </label>

              <input
                id="event-date"
                type="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  setError("");
                }}
                className={`w-full rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition focus:ring-1 ${
                  error && !date
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="event-time"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300"
              >
                <FaClock aria-hidden="true" className="text-amber-400" />
                Time
              </label>

              <input
                id="event-time"
                type="time"
                value={time}
                onChange={(event) => {
                  setTime(event.target.value);
                  setError("");
                }}
                className={`w-full rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition focus:ring-1 ${
                  error && !time
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="event-location"
              className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300"
            >
              <FaLocationDot aria-hidden="true" className="text-emerald-400" />
              Location
            </label>

            <input
              id="event-location"
              type="text"
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
                setError("");
              }}
              placeholder="Meeting Room A, Zoom, etc."
              className={`w-full rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:ring-1 ${
                error && !location.trim()
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-700 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEventModal;
