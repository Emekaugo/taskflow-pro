import {
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaTrash,
} from "react-icons/fa6";

import type { CalendarEvent } from "../../data/calendar";
import {
  formatEventDate,
  formatEventTime,
  isEventToday,
} from "../../data/calendar";

interface EventCardProps {
  event: CalendarEvent;
  onDelete: (id: number) => void;
}

function EventCard({ event, onDelete }: EventCardProps) {
  const eventIsToday = isEventToday(event.date);

  return (
    <article
      className={`rounded-2xl border bg-slate-900 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        eventIsToday
          ? "border-blue-500/70 shadow-blue-500/5"
          : "border-slate-800 hover:border-blue-500"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className="break-words text-lg font-semibold text-white"
              title={event.title}
            >
              {event.title}
            </h3>

            {eventIsToday && (
              <span className="shrink-0 rounded-full bg-blue-600/20 px-2.5 py-1 text-xs font-medium text-blue-400">
                Today
              </span>
            )}
          </div>

          <p className="mt-2 break-words text-sm leading-6 text-slate-400">
            {event.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onDelete(event.id)}
          aria-label={`Delete ${event.title}`}
          title="Delete event"
          className="shrink-0 rounded-lg p-2 text-red-400 transition hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <FaTrash aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 grid gap-3 border-t border-slate-800 pt-4">
        <div className="flex min-w-0 items-center gap-3 text-sm text-slate-400">
          <FaCalendarDays
            aria-hidden="true"
            className="shrink-0 text-blue-400"
          />

          <span className="min-w-0 break-words">
            {formatEventDate(event.date)}
          </span>
        </div>

        <div className="flex min-w-0 items-center gap-3 text-sm text-slate-400">
          <FaClock aria-hidden="true" className="shrink-0 text-amber-400" />

          <span>{formatEventTime(event.time)}</span>
        </div>

        <div className="flex min-w-0 items-center gap-3 text-sm text-slate-400">
          <FaLocationDot
            aria-hidden="true"
            className="shrink-0 text-emerald-400"
          />

          <span className="min-w-0 truncate" title={event.location}>
            {event.location}
          </span>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
