import { FaUsers } from "react-icons/fa6";

import type { TeamMember } from "../../data/team";

interface TeamOverviewProps {
  members: TeamMember[];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TeamOverview({ members }: TeamOverviewProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Team Overview</h2>

          <p className="mt-1 text-sm text-slate-400">
            Active members in your workspace.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20">
          <FaUsers className="text-blue-400" />
        </div>
      </div>

      <div className="space-y-4">
        {members.length === 0 ? (
          <p className="text-sm text-slate-500">No team members available.</p>
        ) : (
          members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-blue-500"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                  {getInitials(member.name)}
                </div>

                <div>
                  <h3 className="font-semibold text-white">{member.name}</h3>

                  <p className="text-sm text-slate-400">{member.role}</p>

                  <p className="text-xs text-slate-500">{member.department}</p>
                </div>
              </div>

              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                Active
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default TeamOverview;
