import {
  FaArrowRight,
  FaFolderPlus,
  FaListCheck,
  FaUserPlus,
} from "react-icons/fa6";

import { quickActions } from "../../data/dashboard";

const icons = [FaFolderPlus, FaListCheck, FaUserPlus];

function QuickActions() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Quick Actions</h2>

        <p className="mt-1 text-sm text-slate-400">Frequently used shortcuts</p>
      </div>

      {/* Actions */}

      <div className="space-y-4">
        {quickActions.map((action, index) => {
          const Icon = icons[index];

          return (
            <button
              key={action.id}
              type="button"
              className="group flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 text-left transition-all duration-200 hover:border-blue-500 hover:bg-slate-800"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon className="text-lg text-blue-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">{action.title}</h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {action.description}
                  </p>
                </div>
              </div>

              <FaArrowRight className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-400" />
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;
