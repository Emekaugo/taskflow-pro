function NotificationSettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      {/* Header */}

      <div>
        <h2 className="text-2xl font-semibold text-white">
          Notification Settings
        </h2>

        <p className="mt-2 text-slate-400">
          Control how you receive notifications from TaskFlow Pro.
        </p>
      </div>

      {/* Settings */}

      <div className="mt-8 space-y-6">
        {[
          {
            title: "Email Notifications",
            description: "Receive updates about tasks and projects via email.",
          },
          {
            title: "Push Notifications",
            description:
              "Get instant browser notifications for important activities.",
          },
          {
            title: "Weekly Reports",
            description: "Receive a weekly summary of your team's progress.",
          },
          {
            title: "Task Reminders",
            description: "Be reminded before your upcoming task deadlines.",
          },
        ].map((setting) => (
          <div
            key={setting.title}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <div>
              <h3 className="text-lg font-medium text-white">
                {setting.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {setting.description}
              </p>
            </div>

            {/* Toggle */}

            <button
              type="button"
              className="relative h-7 w-14 rounded-full bg-blue-600 transition"
            >
              <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white transition" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NotificationSettings;
