interface CalendarGridProps {
  month: string;
  year: number;
}

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarGrid({ month, year }: CalendarGridProps) {
  const totalDays = 30;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}

      <div className="mb-4 grid grid-cols-7 gap-4">
        {weekDays.map((day) => (
          <div
            key={day}
            className="py-3 text-center text-sm font-semibold uppercase tracking-wide text-slate-400"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7 gap-4">
        {Array.from({ length: totalDays }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`flex aspect-square items-center justify-center rounded-xl border transition-all duration-200 ${
              index + 1 === 8
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-slate-800 bg-slate-950 text-slate-300 hover:border-blue-500 hover:bg-slate-800 hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-6 border-t border-slate-800 pt-4">
        <p className="text-sm text-slate-400">
          Viewing{" "}
          <span className="font-medium text-white">
            {month} {year}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CalendarGrid;
