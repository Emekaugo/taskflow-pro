import { FaCalendarDay } from "react-icons/fa6";

import type { CalendarEvent } from "../../data/calendar";
import { filterEventsByDate, formatEventTime } from "../../data/calendar";

interface CalendarGridProps {
  currentMonth: Date;
  events: CalendarEvent[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

function CalendarGrid({
  currentMonth,
  events,
  selectedDate,
  onSelectDate,
}: CalendarGridProps) {
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

  function getDateString(day: number) {
    return `${year}-${String(month + 1).padStart(
      2,
      "0",
    )}-${String(day).padStart(2, "0")}`;
  }

  function isToday(day: number) {
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  }

  function getAccessibleDateLabel(day: number) {
    const date = new Date(year, month, day);

    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
      <div className="mb-4 grid grid-cols-7 gap-2 sm:gap-3">
        {weekDays.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm"
          >
            <span className="hidden sm:inline">{day}</span>

            <span className="sm:hidden">{day.charAt(0)}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 sm:gap-3">
        {cells.map((day, index) => {
          if (day === null) {
            return (
              <div
                key={`empty-${index}`}
                aria-hidden="true"
                className="min-h-[90px] rounded-xl bg-transparent sm:min-h-[130px]"
              />
            );
          }

          const date = getDateString(day);
          const dayEvents = filterEventsByDate(events, date);
          const todayDate = isToday(day);
          const isSelected = selectedDate === date;

          return (
            <button
              key={date}
              type="button"
              onClick={() => onSelectDate(date)}
              aria-label={`${getAccessibleDateLabel(day)}${
                todayDate ? ", today" : ""
              }${dayEvents.length > 0 ? `, ${dayEvents.length} event${dayEvents.length === 1 ? "" : "s"}` : ""}`}
              aria-pressed={isSelected}
              className={`relative flex min-h-[90px] flex-col rounded-xl border p-2 text-left transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 sm:min-h-[130px] sm:p-3 ${
                isSelected
                  ? "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500"
                  : todayDate
                    ? "border-blue-500/70 bg-blue-500/5"
                    : "border-slate-800 bg-slate-950 hover:border-slate-700 hover:bg-slate-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold sm:h-8 sm:w-8 sm:text-sm ${
                    todayDate ? "bg-blue-600 text-white" : "text-slate-300"
                  }`}
                >
                  {day}
                </span>

                {todayDate && (
                  <FaCalendarDay
                    aria-hidden="true"
                    className="hidden text-xs text-blue-400 sm:block"
                  />
                )}
              </div>

              <div className="mt-2 min-w-0 space-y-1 overflow-hidden">
                {dayEvents.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="truncate rounded-md bg-blue-600/20 px-1.5 py-1 text-[10px] font-medium text-blue-300 sm:px-2 sm:text-xs"
                    title={`${event.title} - ${formatEventTime(event.time)}`}
                  >
                    <span className="hidden sm:inline">
                      {formatEventTime(event.time)}{" "}
                    </span>

                    <span className="break-words">{event.title}</span>
                  </div>
                ))}

                {dayEvents.length > 3 && (
                  <span className="block px-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                    +{dayEvents.length - 3} more
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CalendarGrid;
