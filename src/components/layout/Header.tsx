import { FaMagnifyingGlass } from "react-icons/fa6";

import NotificationBell from "../notifications/NotificationBell";
import UserMenu from "../auth/UserMenu";

interface HeaderProps {
  searchQuery?: string;

  onSearchChange?: (value: string) => void;
}

function Header({
  searchQuery = "",

  onSearchChange,
}: HeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-10">
      {/* Search */}

      <div className="relative w-full max-w-xl">
        <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

        <input
          type="text"
          value={searchQuery}
          onChange={(event) => onSearchChange?.(event.target.value)}
          placeholder="Search projects, tasks, team members..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-sm text-white outline-none transition-all duration-200 focus:border-blue-500"
        />
      </div>

      {/* Right */}

      <div className="ml-8 flex items-center gap-6">
        <NotificationBell />

        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
