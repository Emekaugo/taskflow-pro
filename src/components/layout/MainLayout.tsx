import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center border-b border-slate-800 bg-slate-900 px-8">
          <h2 className="text-xl font-semibold">TaskFlow Pro</h2>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
