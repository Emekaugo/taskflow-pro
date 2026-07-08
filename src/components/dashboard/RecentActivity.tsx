import { FaClock } from "react-icons/fa6";

import { recentActivities } from "../../data/dashboard";

function RecentActivity() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Recent Activity</h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest updates across your workspace
          </p>
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-5">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-slate-700"
          >
            <div className="mt-1 rounded-full bg-blue-500/10 p-3">
              <FaClock className="text-blue-400" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-white">{activity.title}</h3>

              <p className="mt-1 text-sm text-slate-400">
                {activity.description}
              </p>

              <p className="mt-3 text-xs text-slate-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentActivity;
