import {
  FaCalendarDays,
  FaClipboardCheck,
  FaDiagramProject,
  FaUsers,
} from "react-icons/fa6";

import { recentActivities } from "../../data/analytics";

const activityIcons = {
  project: FaDiagramProject,

  task: FaClipboardCheck,

  calendar: FaCalendarDays,

  team: FaUsers,
};

const activityColors = {
  project: "text-blue-400",

  task: "text-emerald-400",

  calendar: "text-amber-400",

  team: "text-purple-400",
};

function RecentActivity() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Recent Activity</h2>

        <p className="mt-1 text-sm text-slate-400">
          Latest updates across your workspace.
        </p>
      </div>

      <div className="space-y-5">
        {recentActivities.map((activity) => {
          const Icon = activityIcons[activity.type];

          return (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
                <Icon className={`text-lg ${activityColors[activity.type]}`} />
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-white">{activity.title}</h3>

                <p className="mt-1 text-sm text-slate-400">
                  {activity.description}
                </p>
              </div>

              <span className="whitespace-nowrap text-xs text-slate-500">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecentActivity;
