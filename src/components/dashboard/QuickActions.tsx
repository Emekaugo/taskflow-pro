import {
  FaCalendarPlus,
  FaClipboardList,
  FaFolderPlus,
  FaUserPlus,
} from "react-icons/fa6";

import { quickActions } from "../../data/analytics";

const actionIcons = {
  "New Project": FaFolderPlus,

  "Add Task": FaClipboardList,

  "Invite Member": FaUserPlus,

  "Schedule Meeting": FaCalendarPlus,
};

const actionColors = {
  "New Project": "text-blue-400",

  "Add Task": "text-emerald-400",

  "Invite Member": "text-purple-400",

  "Schedule Meeting": "text-amber-400",
};

function QuickActions() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Quick Actions</h2>

        <p className="mt-1 text-sm text-slate-400">
          Frequently used workspace actions.
        </p>
      </div>

      <div className="grid gap-4">
        {quickActions.map((action) => {
          const Icon = actionIcons[action.title as keyof typeof actionIcons];

          const color = actionColors[action.title as keyof typeof actionColors];

          return (
            <button
              key={action.id}
              type="button"
              className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 text-left transition-all duration-200 hover:border-blue-500 hover:bg-slate-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Icon className={`text-xl ${color}`} />
              </div>

              <div>
                <h3 className="font-semibold text-white">{action.title}</h3>

                <p className="mt-1 text-sm text-slate-400">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;
