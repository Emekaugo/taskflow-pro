import type { CalendarEvent } from "../../data/calendar";

import EventCard from "./EventCard";

interface UpcomingEventsProps {
  events: CalendarEvent[];
  onDelete: (id: number) => void;
}

function UpcomingEvents({ events, onDelete }: UpcomingEventsProps) {
  if (events.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-semibold text-white">Upcoming Events</h2>

        <div className="mt-8 flex h-48 items-center justify-center rounded-xl border border-dashed border-slate-700">
          <p className="text-slate-500">No upcoming events scheduled.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Upcoming Events</h2>

        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
          {events.length}
        </span>
      </div>

      {/* Events */}

      <div className="space-y-5">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
