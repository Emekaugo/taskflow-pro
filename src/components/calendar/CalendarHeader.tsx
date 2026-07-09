import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CalendarHeaderProps {
  month: string;
  year: number;
}

function CalendarHeader({ month, year }: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5">
      {/* Left */}

      <div>
        <h2 className="text-2xl font-bold text-white">
          {month} {year}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Manage your upcoming meetings and deadlines.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Today
        </button>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;
