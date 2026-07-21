import { FaBell, FaMagnifyingGlass, FaRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import useAuth from "../../contexts/useAuth";

function Header() {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/login", {
      replace: true,
    });
  }

  const initials =
    currentUser?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "U";

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-10">
      {/* Search */}

      <div className="relative w-[560px]">
        <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

        <input
          type="text"
          placeholder="Search projects, boards or members..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500"
        />
      </div>

      {/* Right */}

      <div className="flex items-center gap-8">
        <button
          type="button"
          className="text-xl text-slate-400 transition hover:text-white"
        >
          <FaBell />
        </button>

        {/* User */}

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            {initials}
          </div>

          <div>
            <p className="font-semibold text-white">{currentUser?.name}</p>

            <p className="text-sm text-slate-400">{currentUser?.email}</p>
          </div>
        </div>

        {/* Logout */}

        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-red-500 hover:text-red-400"
        >
          <FaRightFromBracket />

          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
