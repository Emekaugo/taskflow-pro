import useApp from "../../contexts/useApp";

type NotificationField =
  | "emailNotifications"
  | "pushNotifications"
  | "smsNotifications";

function NotificationSettings() {
  const { settings, setSettings } = useApp();

  function toggleNotification(field: NotificationField) {
    setSettings((previousSettings) => ({
      ...previousSettings,

      notifications: {
        ...previousSettings.notifications,

        [field]: !previousSettings.notifications[field],
      },
    }));
  }

  const notificationOptions = [
    {
      key: "emailNotifications",
      title: "Email Notifications",
      description: "Receive updates through email.",
    },
    {
      key: "pushNotifications",
      title: "Push Notifications",
      description: "Receive push notifications in the application.",
    },
    {
      key: "smsNotifications",
      title: "SMS Notifications",
      description: "Receive important alerts via SMS.",
    },
  ] satisfies {
    key: NotificationField;
    title: string;
    description: string;
  }[];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">
          Notification Settings
        </h2>

        <p className="mt-2 text-slate-400">
          Choose how you'd like to receive updates.
        </p>
      </div>

      <div className="space-y-5">
        {notificationOptions.map((option) => (
          <div
            key={option.key}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div>
              <h3 className="font-medium text-white">{option.title}</h3>

              <p className="mt-1 text-sm text-slate-400">
                {option.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleNotification(option.key)}
              className={`relative h-7 w-14 rounded-full transition ${
                settings.notifications[option.key]
                  ? "bg-blue-600"
                  : "bg-slate-700"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  settings.notifications[option.key] ? "left-8" : "left-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NotificationSettings;
