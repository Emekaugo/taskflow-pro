import { FaCalendarDays } from "react-icons/fa6";

import type { CalendarEvent } from "../../data/calendar";

interface UpcomingDeadlinesProps {
  events: CalendarEvent[];
}

function UpcomingDeadlines({ events }: UpcomingDeadlinesProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Upcoming Deadlines</h2>

        <p className="mt-1 text-sm text-slate-400">
          Important project milestones and calendar events.
        </p>
      </div>

      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-sm text-slate-500">No upcoming deadlines.</p>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20">
                  <FaCalendarDays className="text-blue-400" />
                </div>

                <div>
                  <h3 className="font-medium text-white">{event.title}</h3>

                  <p className="mt-1 text-sm text-slate-400">{event.date}</p>
                </div>
              </div>

              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Upcoming
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default UpcomingDeadlines;
