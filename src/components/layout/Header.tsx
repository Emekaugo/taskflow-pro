import { FaBell, FaCircleUser, FaMagnifyingGlass } from "react-icons/fa6";

function Header() {
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
          className="text-xl text-slate-400 hover:text-white"
        >
          <FaBell />
        </button>

        <div className="flex items-center gap-3">
          <FaCircleUser className="text-4xl text-slate-300" />

          <div>
            <p className="font-semibold text-white">Chukwuemeka</p>

            <p className="text-sm text-slate-400">Software Engineer</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
