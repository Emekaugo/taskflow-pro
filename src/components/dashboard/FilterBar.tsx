interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  title?: string;

  value: string;

  options: FilterOption[];

  onChange: (value: string) => void;
}

function FilterBar({
  title = "Filter",

  value,

  options,

  onChange,
}: FilterBarProps) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 md:flex-row md:items-center md:justify-between">
      <h2 className="text-lg font-semibold text-white">{title}</h2>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const active = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default FilterBar;
