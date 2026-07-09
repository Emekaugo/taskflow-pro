import {
  FaCircleUser,
  FaEnvelope,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa6";

import type { TeamMember } from "../../data/team";

interface MemberCardProps {
  member: TeamMember;
}

const statusStyles = {
  Online: {
    dot: "bg-emerald-500",
    text: "text-emerald-400",
  },
  Away: {
    dot: "bg-amber-500",
    text: "text-amber-400",
  },
  Offline: {
    dot: "bg-slate-500",
    text: "text-slate-400",
  },
};

function MemberCard({ member }: MemberCardProps) {
  const status = statusStyles[member.status];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      {/* Avatar */}

      <div className="flex flex-col items-center">
        <FaCircleUser className="text-7xl text-slate-300" />

        <h3 className="mt-4 text-xl font-semibold text-white">{member.name}</h3>

        <p className="mt-1 text-sm text-slate-400">{member.role}</p>
      </div>

      {/* Divider */}

      <div className="my-5 border-t border-slate-800" />

      {/* Details */}

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaEnvelope className="text-blue-400" />

          <span className="truncate">{member.email}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaBuilding className="text-purple-400" />

          <span>{member.department}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <FaBriefcase className="text-cyan-400" />

          <span>{member.role}</span>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-6 border-t border-slate-800 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Status</span>

          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${status.dot}`} />

            <span className={`text-sm font-medium ${status.text}`}>
              {member.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
