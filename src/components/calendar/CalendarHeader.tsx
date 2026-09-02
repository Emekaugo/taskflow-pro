import {
  FaCalendarDay,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa6";

interface CalendarHeaderProps {
  currentMonth: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  onAddEvent: () => void;
}

function CalendarHeader({
  currentMonth,
  onPreviousMonth,
  onNextMonth,
  onToday,
  onAddEvent,
}: CalendarHeaderProps) {
  const month = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
        <button
          type="button"
          onClick={onPreviousMonth}
          aria-label="Previous month"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-white transition hover:border-blue-500 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>

        <div className="min-w-[150px] text-center sm:min-w-[180px]">
          <h1 className="text-xl font-bold text-white sm:text-2xl">{month}</h1>

          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            Calendar Overview
          </p>
        </div>

        <button
          type="button"
          onClick={onNextMonth}
          aria-label="Next month"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-white transition hover:border-blue-500 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <FaChevronRight aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={onToday}
          aria-label="Go to today"
          className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-white transition hover:border-blue-500 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <FaCalendarDay aria-hidden="true" />

          <span>Today</span>
        </button>
      </div>

      <button
        type="button"
        onClick={onAddEvent}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 xl:w-auto"
      >
        <FaPlus aria-hidden="true" />

        <span>Add Event</span>
      </button>
    </section>
  );
}

export default CalendarHeader;
