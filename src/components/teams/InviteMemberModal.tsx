import { useState } from "react";

import type { TeamMember, TeamRole } from "../../data/team";

interface InviteMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInviteMember: (member: TeamMember) => void;
}

function InviteMemberModal({
  isOpen,
  onClose,
  onInviteMember,
}: InviteMemberModalProps) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [role, setRole] = useState<TeamRole>("Frontend Developer");

  const [department, setDepartment] = useState("Engineering");

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !department.trim()) {
      return;
    }

    const newMember: TeamMember = {
      id: Date.now(),
      name,
      email,
      role,
      department,
    };

    onInviteMember(newMember);

    setName("");
    setEmail("");
    setRole("Frontend Developer");
    setDepartment("Engineering");

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">
            Invite Team Member
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-3xl leading-none text-slate-400 transition hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter full name"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@email.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Role
              </label>

              <select
                value={role}
                onChange={(event) => setRole(event.target.value as TeamRole)}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              >
                <option>Frontend Developer</option>

                <option>Backend Developer</option>

                <option>UI/UX Designer</option>

                <option>Project Manager</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Department
              </label>

              <input
                type="text"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                placeholder="Engineering"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Invite Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InviteMemberModal;
