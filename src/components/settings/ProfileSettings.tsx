import { FaCircleUser } from "react-icons/fa6";

function ProfileSettings() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      {/* Header */}

      <div className="flex items-center gap-5">
        <FaCircleUser className="text-7xl text-slate-300" />

        <div>
          <h2 className="text-2xl font-semibold text-white">
            Profile Settings
          </h2>

          <p className="mt-1 text-slate-400">
            Update your personal information.
          </p>
        </div>
      </div>

      {/* Form */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            defaultValue="Chukwuemeka Ugochukwu"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            defaultValue="emeka@example.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Job Title
          </label>

          <input
            type="text"
            defaultValue="Frontend Developer"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Company
          </label>

          <input
            type="text"
            defaultValue="TaskFlow Pro"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Bio */}

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Bio
        </label>

        <textarea
          rows={4}
          defaultValue="Frontend Developer passionate about building scalable web applications using React and TypeScript."
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Action */}

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}

export default ProfileSettings;
