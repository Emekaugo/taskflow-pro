import {
  FaCalendarPlus,
  FaFolderPlus,
  FaListCheck,
  FaUserPlus,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "New Project",
      icon: FaFolderPlus,
      color: "text-blue-400",
      route: "/projects",
    },
    {
      title: "Add Task",
      icon: FaListCheck,
      color: "text-emerald-400",
      route: "/board",
    },
    {
      title: "Create Event",
      icon: FaCalendarPlus,
      color: "text-purple-400",
      route: "/calendar",
    },
    {
      title: "Invite Member",
      icon: FaUserPlus,
      color: "text-amber-400",
      route: "/team",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Quick Actions</h2>

        <p className="mt-2 text-slate-400">
          Jump quickly to the most common actions.
        </p>
      </div>

      {/* Actions */}

      <div className="grid gap-4 md:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              onClick={() => navigate(action.route)}
              className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Icon className={`text-xl ${action.color}`} />
              </div>

              <div>
                <h3 className="font-semibold text-white">{action.title}</h3>

                <p className="mt-1 text-sm text-slate-400">
                  Open {action.title.toLowerCase()} page
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
