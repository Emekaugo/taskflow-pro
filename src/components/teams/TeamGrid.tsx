import type { TeamMember } from "../../data/team";

import MemberCard from "./MemberCard";

interface TeamGridProps {
  members: TeamMember[];
  onDelete: (id: number) => void;
}

function TeamGrid({ members, onDelete }: TeamGridProps) {
  if (members.length === 0) {
    return (
      <section className="flex h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900">
        <h2 className="text-2xl font-semibold text-white">No Team Members</h2>

        <p className="mt-3 text-slate-400">
          Invite your first team member to get started.
        </p>
      </section>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} onDelete={onDelete} />
      ))}
    </section>
  );
}

export default TeamGrid;
