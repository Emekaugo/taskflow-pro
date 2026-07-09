import type { CalendarEvent } from "../../data/calendar";

import EventCard from "./EventCard";

interface UpcomingEventsProps {
  events: CalendarEvent[];
}

function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (events.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white">
            No Upcoming Events
          </h3>

          <p className="mt-2 text-slate-400">Your schedule is clear.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Upcoming Events</h2>

          <p className="mt-1 text-sm text-slate-400">
            {events.length} upcoming event
            {events.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
