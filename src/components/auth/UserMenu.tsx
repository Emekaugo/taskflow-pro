import { FaRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import useAuth from "../../contexts/useAuth";

function UserMenu() {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const initials =
    currentUser?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "U";

  function handleLogout() {
    logout();

    navigate("/login", {
      replace: true,
    });
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
        {initials}
      </div>

      <div className="hidden md:block">
        <p className="font-semibold text-white">{currentUser?.name}</p>

        <p className="text-sm text-slate-400">{currentUser?.email}</p>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-red-500 hover:text-red-400"
      >
        <FaRightFromBracket />

        <span className="hidden lg:inline">Logout</span>
      </button>
    </div>
  );
}

export default UserMenu;
