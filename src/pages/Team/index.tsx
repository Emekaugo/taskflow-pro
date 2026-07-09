import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import { teamMembers, teamStats } from "../../data/team";
import InviteMemberModal from "../../components/teams/InviteMemberModal";
import TeamGrid from "../../components/teams/TeamGrid";
import TeamStats from "../../components/teams/TeamStats";

function Team() {
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <>
      <div className="space-y-8">
        {/* Header */}

        <section className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Team</h1>

            <p className="mt-2 text-slate-400">
              Manage your team members and collaborate efficiently.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowInviteModal(true)}
            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <FaPlus />

            <span>Invite Member</span>
          </button>
        </section>

        {/* Statistics */}

        <TeamStats
          totalMembers={teamStats.totalMembers}
          developers={teamStats.developers}
          designers={teamStats.designers}
          managers={teamStats.managers}
        />

        {/* Team Members */}

        <TeamGrid members={teamMembers} />
      </div>

      {/* Invite Modal */}

      <InviteMemberModal
        open={showInviteModal}
        onClose={() => setShowInviteModal(false)}
      />
    </>
  );
}

export default Team;
