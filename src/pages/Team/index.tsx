import { useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa6";

import useApp from "../../contexts/useApp";

import {
  filterMembersByRole,
  searchMembers,
  type TeamMember,
  type TeamRole,
} from "../../data/team";
import InviteMemberModal from "../../components/teams/InviteMemberModal";
import TeamGrid from "../../components/teams/TeamGrid";
import TeamStats from "../../components/teams/TeamStats";

function Team() {
  const { members, setMembers } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedRole, setSelectedRole] = useState<"All" | TeamRole>("All");

  const filteredMembers = useMemo(() => {
    const searchedMembers = searchMembers(members, searchQuery);

    return filterMembersByRole(searchedMembers, selectedRole);
  }, [members, searchQuery, selectedRole]);

  function handleInviteMember(member: TeamMember) {
    setMembers((previousMembers) => [member, ...previousMembers]);
  }

  function handleDeleteMember(id: number) {
    setMembers((previousMembers) =>
      previousMembers.filter((member) => member.id !== id),
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Team</h1>

          <p className="mt-2 text-slate-400">
            Manage your team members and collaborate effectively.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <FaPlus />

          <span>Invite Member</span>
        </button>
      </section>

      {/* Statistics */}

      <TeamStats members={members} />

      {/* Search & Filter */}

      <section className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:grid-cols-2">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <select
          value={selectedRole}
          onChange={(event) =>
            setSelectedRole(event.target.value as "All" | TeamRole)
          }
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        >
          <option value="All">All Roles</option>

          <option value="Frontend Developer">Frontend Developer</option>

          <option value="Backend Developer">Backend Developer</option>

          <option value="UI/UX Designer">UI/UX Designer</option>

          <option value="Project Manager">Project Manager</option>
        </select>
      </section>

      {/* Members */}

      <TeamGrid members={filteredMembers} onDelete={handleDeleteMember} />

      {/* Invite Modal */}

      <InviteMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onInviteMember={handleInviteMember}
      />
    </div>
  );
}

export default Team;
