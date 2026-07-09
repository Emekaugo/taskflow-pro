import type { TeamMember } from "../../data/team";

import MemberCard from "./MemberCard";

interface TeamGridProps {
  members: TeamMember[];
}

function TeamGrid({ members }: TeamGridProps) {
  if (members.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">No Team Members</h2>

          <p className="mt-2 text-slate-400">
            Invite members to start collaborating.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Team Members</h2>

          <p className="mt-1 text-sm text-slate-400">
            {members.length} member
            {members.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Grid */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

export default TeamGrid;
