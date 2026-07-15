import { FaEnvelope, FaTrash, FaUserGroup } from "react-icons/fa6";

import type { TeamMember } from "../../data/team";

interface MemberCardProps {
  member: TeamMember;
  onDelete: (id: number) => void;
}

function MemberCard({ member, onDelete }: MemberCardProps) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            {initials}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>

            <p className="mt-1 text-sm text-slate-400">{member.role}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onDelete(member.id)}
          className="rounded-lg p-2 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <FaTrash />
        </button>
      </div>

      {/* Details */}

      <div className="mt-6 space-y-3 border-t border-slate-800 pt-4">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaEnvelope className="text-blue-400" />

          <span>{member.email}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaUserGroup className="text-emerald-400" />

          <span>{member.department}</span>
        </div>
      </div>
    </article>
  );
}

export default MemberCard;
