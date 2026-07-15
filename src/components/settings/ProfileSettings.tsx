import useApp from "../../contexts/useApp";

function ProfileSettings() {
  const { settings, setSettings } = useApp();

  function updateProfile(field: "name" | "email" | "jobTitle", value: string) {
    setSettings((previousSettings) => ({
      ...previousSettings,

      profile: {
        ...previousSettings.profile,

        [field]: value,
      },
    }));
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">Profile Settings</h2>

        <p className="mt-2 text-slate-400">Update your personal information.</p>
      </div>

      <div className="space-y-6">
        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            value={settings.profile.name}
            onChange={(event) => updateProfile("name", event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            value={settings.profile.email}
            onChange={(event) => updateProfile("email", event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Job Title */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Job Title
          </label>

          <input
            type="text"
            value={settings.profile.jobTitle}
            onChange={(event) => updateProfile("jobTitle", event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileSettings;
