import useApp from "../../contexts/useApp";

function AppearanceSettings() {
  const { settings, setSettings } = useApp();

  function updateTheme(theme: "Dark" | "Light") {
    setSettings((previousSettings) => ({
      ...previousSettings,

      appearance: {
        ...previousSettings.appearance,

        theme,
      },
    }));
  }

  function toggleCompactMode() {
    setSettings((previousSettings) => ({
      ...previousSettings,

      appearance: {
        ...previousSettings.appearance,

        compactMode: !previousSettings.appearance.compactMode,
      },
    }));
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">
          Appearance Settings
        </h2>

        <p className="mt-2 text-slate-400">
          Customize how the application looks.
        </p>
      </div>

      <div className="space-y-8">
        {/* Theme */}

        <div>
          <label className="mb-3 block text-sm font-medium text-slate-300">
            Theme
          </label>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => updateTheme("Dark")}
              className={`rounded-xl px-6 py-3 font-medium transition ${
                settings.appearance.theme === "Dark"
                  ? "bg-blue-600 text-white"
                  : "border border-slate-700 bg-slate-800 text-slate-300"
              }`}
            >
              Dark
            </button>

            <button
              type="button"
              onClick={() => updateTheme("Light")}
              className={`rounded-xl px-6 py-3 font-medium transition ${
                settings.appearance.theme === "Light"
                  ? "bg-blue-600 text-white"
                  : "border border-slate-700 bg-slate-800 text-slate-300"
              }`}
            >
              Light
            </button>
          </div>
        </div>

        {/* Compact Mode */}

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div>
            <h3 className="font-medium text-white">Compact Mode</h3>

            <p className="mt-1 text-sm text-slate-400">
              Reduce spacing throughout the interface.
            </p>
          </div>

          <button
            type="button"
            onClick={toggleCompactMode}
            className={`relative h-7 w-14 rounded-full transition ${
              settings.appearance.compactMode ? "bg-blue-600" : "bg-slate-700"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                settings.appearance.compactMode ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AppearanceSettings;
