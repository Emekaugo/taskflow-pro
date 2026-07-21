import { NavLink } from "react-router-dom";

import { navigationItems } from "../../constants/navigation";

import useAuth from "../../contexts/useAuth";

function Sidebar() {
  const { currentUser } = useAuth();

  const sections = [
    { title: "OVERVIEW", key: "overview" },
    { title: "WORKSPACE", key: "workspace" },
    { title: "TEAM", key: "team" },
    { title: "ACCOUNT", key: "account" },
  ] as const;

  const initials =
    currentUser?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "U";

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-900">
      {/* Logo */}

      <div className="px-7 py-8">
        <h1 className="text-2xl font-bold text-blue-500">TaskFlow Pro</h1>

        <p className="mt-1 text-sm text-slate-400">Project Management</p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-5 pb-8">
        {sections.map((section) => (
          <div key={section.key} className="mb-10">
            <h2 className="mb-3 px-3 text-xs font-semibold tracking-[0.2em] text-slate-500">
              {section.title}
            </h2>

            <div className="space-y-1.5">
              {navigationItems
                .filter((item) => item.section === section.key)
                .map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`
                      }
                    >
                      <Icon className="text-lg" />

                      <span className="font-medium">{item.name}</span>
                    </NavLink>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>

      {/* Current User */}

      <div className="border-t border-slate-800 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            {initials}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-medium text-white">
              {currentUser?.name}
            </p>

            <p className="truncate text-xs text-slate-400">
              {currentUser?.email}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
