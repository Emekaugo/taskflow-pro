import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa6";

interface CalendarHeaderProps {
  currentMonth: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onAddEvent: () => void;
}

function CalendarHeader({
  currentMonth,
  onPreviousMonth,
  onNextMonth,
  onAddEvent,
}: CalendarHeaderProps) {
  const month = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onPreviousMonth}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-white transition hover:border-blue-500 hover:bg-slate-700"
        >
          <FaChevronLeft />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-white">{month}</h1>

          <p className="mt-1 text-sm text-slate-400">Calendar Overview</p>
        </div>

        <button
          type="button"
          onClick={onNextMonth}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-white transition hover:border-blue-500 hover:bg-slate-700"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Right */}

      <button
        type="button"
        onClick={onAddEvent}
        className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        <FaPlus />

        <span>Add Event</span>
      </button>
    </section>
  );
}

export default CalendarHeader;
