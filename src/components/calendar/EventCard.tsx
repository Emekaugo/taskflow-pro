import { FaCalendarDays, FaClock } from "react-icons/fa6";

import type { CalendarEvent } from "../../data/calendar";

interface EventCardProps {
  event: CalendarEvent;
}

const eventStyles = {
  Meeting: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  Review: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  Deadline: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
  },
};

function EventCard({ event }: EventCardProps) {
  const styles = eventStyles[event.type];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{event.title}</h3>
        </div>

        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles.bg} ${styles.text} ${styles.border}`}
        >
          {event.type}
        </span>
      </div>

      {/* Details */}

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaCalendarDays />

          <span>{event.date}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaClock />

          <span>{event.time}</span>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
