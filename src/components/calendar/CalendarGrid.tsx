import type { CalendarEvent } from "../../data/calendar";

interface CalendarGridProps {
  currentMonth: Date;
  events: CalendarEvent[];
}

function CalendarGrid({ currentMonth, events }: CalendarGridProps) {
  const year = currentMonth.getFullYear();

  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1);

  const lastDay = new Date(year, month + 1, 0);

  const firstWeekDay = firstDay.getDay();

  const daysInMonth = lastDay.getDate();

  const today = new Date();

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const cells: (number | null)[] = [];

  for (let i = 0; i < firstWeekDay; i++) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  function hasEvent(day: number) {
    const date = `${year}-${String(month + 1).padStart(
      2,
      "0",
    )}-${String(day).padStart(2, "0")}`;

    return events.some((event) => event.date === date);
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Week Header */}

      <div className="mb-4 grid grid-cols-7 gap-3">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold uppercase tracking-wide text-slate-400"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7 gap-3">
        {cells.map((day, index) => {
          if (day === null) {
            return (
              <div
                key={index}
                className="aspect-square rounded-xl bg-transparent"
              />
            );
          }

          const isToday =
            today.getFullYear() === year &&
            today.getMonth() === month &&
            today.getDate() === day;

          const eventExists = hasEvent(day);

          return (
            <div
              key={index}
              className={`relative flex aspect-square flex-col rounded-xl border p-3 transition ${
                isToday
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-slate-800 bg-slate-950 hover:border-slate-700"
              }`}
            >
              <span
                className={`text-sm font-semibold ${
                  isToday ? "text-blue-400" : "text-white"
                }`}
              >
                {day}
              </span>

              {eventExists && (
                <span className="mt-auto h-2 w-2 rounded-full bg-emerald-400" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CalendarGrid;
