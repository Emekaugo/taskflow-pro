import { FaCalendarCheck, FaFilter, FaXmark } from "react-icons/fa6";

import type { CalendarEvent } from "../../data/calendar";

import EventCard from "./EventCard";

interface UpcomingEventsProps {
  events: CalendarEvent[];
  onDelete: (id: number) => void;
  selectedDate: string | null;
  onClearDate: () => void;
}

function UpcomingEvents({
  events,
  onDelete,
  selectedDate,
  onClearDate,
}: UpcomingEventsProps) {
  const displayedEvents = selectedDate
    ? events.filter((event) => event.date === selectedDate)
    : events;

  const title = selectedDate ? "Events on Selected Date" : "Upcoming Events";

  if (displayedEvents.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <FaCalendarCheck
              aria-hidden="true"
              className="shrink-0 text-blue-400"
            />

            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              {title}
            </h2>
          </div>

          {selectedDate && (
            <button
              type="button"
              onClick={onClearDate}
              aria-label="Clear selected date"
              title="Clear selected date"
              className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <FaXmark aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="mt-8 flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 px-4 text-center">
          <FaFilter
            aria-hidden="true"
            className="mb-3 text-xl text-slate-600"
          />

          <p className="text-sm text-slate-500">
            {selectedDate
              ? "No events scheduled for this date."
              : "No upcoming events scheduled."}
          </p>

          {selectedDate && (
            <button
              type="button"
              onClick={onClearDate}
              className="mt-4 rounded-lg px-3 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/10 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View upcoming events
            </button>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <FaCalendarCheck
            aria-hidden="true"
            className="shrink-0 text-blue-400"
          />

          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              {title}
            </h2>

            {selectedDate && (
              <p className="mt-1 truncate text-sm text-slate-500">
                {selectedDate}
              </p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
            {displayedEvents.length}
          </span>

          {selectedDate && (
            <button
              type="button"
              onClick={onClearDate}
              aria-label="Clear selected date"
              title="Clear selected date"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <FaXmark aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-5">
        {displayedEvents.map((event) => (
          <EventCard key={event.id} event={event} onDelete={onDelete} />
        ))}
      </div>

      {selectedDate && (
        <button
          type="button"
          onClick={onClearDate}
          className="mt-6 w-full rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          View All Upcoming Events
        </button>
      )}
    </section>
  );
}

export default UpcomingEvents;
