import {
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaTrash,
} from "react-icons/fa6";

import type { CalendarEvent } from "../../data/calendar";

interface EventCardProps {
  event: CalendarEvent;
  onDelete: (id: number) => void;
}

function EventCard({ event, onDelete }: EventCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{event.title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {event.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onDelete(event.id)}
          className="rounded-lg p-2 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <FaTrash />
        </button>
      </div>

      {/* Event Details */}

      <div className="mt-6 space-y-3 border-t border-slate-800 pt-4">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaCalendarDays className="text-blue-400" />

          <span>{event.date}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaClock className="text-amber-400" />

          <span>{event.time}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaLocationDot className="text-emerald-400" />

          <span>{event.location}</span>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
