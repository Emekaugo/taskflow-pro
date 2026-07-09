function SecuritySettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      {/* Header */}

      <div>
        <h2 className="text-2xl font-semibold text-white">Security Settings</h2>

        <p className="mt-2 text-slate-400">
          Manage your password and account security preferences.
        </p>
      </div>

      {/* Change Password */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Current Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            New Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Two Factor Authentication */}

      <div className="mt-8 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-5">
        <div>
          <h3 className="text-lg font-medium text-white">
            Two-Factor Authentication
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Add an extra layer of protection to your account.
          </p>
        </div>

        <button
          type="button"
          className="relative h-7 w-14 rounded-full bg-slate-700 transition"
        >
          <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition" />
        </button>
      </div>

      {/* Active Sessions */}

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <h3 className="text-lg font-medium text-white">Active Sessions</h3>

        <p className="mt-2 text-sm text-slate-400">
          You are currently signed in on this device.
        </p>

        <div className="mt-5 flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 p-4">
          <div>
            <p className="font-medium text-white">Windows • Chrome</p>

            <p className="mt-1 text-sm text-slate-400">
              Lagos, Nigeria • Active Now
            </p>
          </div>

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
            Current
          </span>
        </div>
      </div>

      {/* Actions */}

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          className="rounded-xl border border-red-500 px-5 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Logout All Devices
        </button>

        <button
          type="button"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Update Security
        </button>
      </div>
    </section>
  );
}

export default SecuritySettings;
