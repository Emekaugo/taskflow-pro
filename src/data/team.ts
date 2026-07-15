export type TeamRole =
  | "Frontend Developer"
  | "Backend Developer"
  | "UI/UX Designer"
  | "Project Manager";

export interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: TeamRole;
  department: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Chukwuemeka Ugochukwu",
    email: "emeka@example.com",
    role: "Frontend Developer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "UI/UX Designer",
    department: "Design",
  },
  {
    id: 3,
    name: "Daniel Wilson",
    email: "daniel@example.com",
    role: "Backend Developer",
    department: "Engineering",
  },
  {
    id: 4,
    name: "Grace Smith",
    email: "grace@example.com",
    role: "Project Manager",
    department: "Management",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Frontend Developer",
    department: "Engineering",
  },
];

export function searchMembers(members: TeamMember[], query: string) {
  if (!query.trim()) {
    return members;
  }

  const search = query.toLowerCase();

  return members.filter(
    (member) =>
      member.name.toLowerCase().includes(search) ||
      member.email.toLowerCase().includes(search),
  );
}

export function filterMembersByRole(
  members: TeamMember[],
  role: TeamRole | "All",
) {
  if (role === "All") {
    return members;
  }

  return members.filter((member) => member.role === role);
}

export function getTeamStatistics(members: TeamMember[]) {
  return {
    total: members.length,

    frontend: members.filter((member) => member.role === "Frontend Developer")
      .length,

    backend: members.filter((member) => member.role === "Backend Developer")
      .length,

    designers: members.filter((member) => member.role === "UI/UX Designer")
      .length,

    managers: members.filter((member) => member.role === "Project Manager")
      .length,
  };
}
