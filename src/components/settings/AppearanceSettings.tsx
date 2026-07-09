function AppearanceSettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      {/* Header */}

      <div>
        <h2 className="text-2xl font-semibold text-white">
          Appearance Settings
        </h2>

        <p className="mt-2 text-slate-400">
          Customize how TaskFlow Pro looks and feels.
        </p>
      </div>

      {/* Theme */}

      <div className="mt-8 space-y-8">
        <div>
          <label className="mb-3 block text-sm font-medium text-slate-300">
            Theme
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500">
            <option>Dark</option>
            <option>Light</option>
            <option>System Default</option>
          </select>
        </div>

        {/* Accent Color */}

        <div>
          <label className="mb-4 block text-sm font-medium text-slate-300">
            Accent Color
          </label>

          <div className="flex items-center gap-4">
            {[
              "bg-blue-500",
              "bg-emerald-500",
              "bg-purple-500",
              "bg-amber-500",
              "bg-red-500",
            ].map((color) => (
              <button
                key={color}
                type="button"
                className={`h-10 w-10 rounded-full border-2 border-slate-700 transition hover:scale-110 ${color}`}
              />
            ))}
          </div>
        </div>

        {/* Compact Mode */}

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-5">
          <div>
            <h3 className="text-lg font-medium text-white">Compact Mode</h3>

            <p className="mt-1 text-sm text-slate-400">
              Reduce spacing for a denser layout.
            </p>
          </div>

          <button
            type="button"
            className="relative h-7 w-14 rounded-full bg-slate-700 transition"
          >
            <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition" />
          </button>
        </div>

        {/* Sidebar */}

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-5">
          <div>
            <h3 className="text-lg font-medium text-white">Collapse Sidebar</h3>

            <p className="mt-1 text-sm text-slate-400">
              Show only icons in the navigation menu.
            </p>
          </div>

          <button
            type="button"
            className="relative h-7 w-14 rounded-full bg-blue-600 transition"
          >
            <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white transition" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AppearanceSettings;
