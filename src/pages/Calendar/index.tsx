import CalendarGrid from "../../components/calendar/CalendarGrid";
import CalendarHeader from "../../components/calendar/CalendarHeader";
import UpcomingEvents from "../../components/calendar/UpcomingEvents";

import { calendarEvents } from "../../data/calendar";

function Calendar() {
  return (
    <div className="space-y-8">
      {/* Page Header */}

      <section>
        <h1 className="text-3xl font-bold text-white">Calendar</h1>

        <p className="mt-2 text-slate-400">
          Keep track of meetings, deadlines and upcoming events.
        </p>
      </section>

      {/* Calendar Header */}

      <CalendarHeader month="September" year={2026} />

      {/* Calendar Grid */}

      <CalendarGrid month="September" year={2026} />

      {/* Upcoming Events */}

      <UpcomingEvents events={calendarEvents} />
    </div>
  );
}

export default Calendar;
