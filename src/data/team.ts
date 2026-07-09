export type MemberStatus = "Online" | "Away" | "Offline";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  status: MemberStatus;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Chukwuemeka Ugochukwu",
    role: "Frontend Developer",
    department: "Engineering",
    email: "emeka@example.com",
    status: "Online",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    department: "Design",
    email: "sarah@example.com",
    status: "Away",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Backend Developer",
    department: "Engineering",
    email: "david@example.com",
    status: "Online",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Project Manager",
    department: "Management",
    email: "michael@example.com",
    status: "Online",
  },
  {
    id: 5,
    name: "Sophia Wilson",
    role: "QA Engineer",
    department: "Quality Assurance",
    email: "sophia@example.com",
    status: "Offline",
  },
  {
    id: 6,
    name: "James Taylor",
    role: "DevOps Engineer",
    department: "Infrastructure",
    email: "james@example.com",
    status: "Away",
  },
  {
    id: 7,
    name: "Emma Davis",
    role: "Product Manager",
    department: "Product",
    email: "emma@example.com",
    status: "Online",
  },
  {
    id: 8,
    name: "Daniel Anderson",
    role: "Mobile Developer",
    department: "Engineering",
    email: "daniel@example.com",
    status: "Offline",
  },
];

export const teamStats = {
  totalMembers: teamMembers.length,
  developers: teamMembers.filter((member) =>
    member.role.toLowerCase().includes("developer"),
  ).length,
  designers: teamMembers.filter((member) => member.department === "Design")
    .length,
  managers: teamMembers.filter((member) =>
    member.role.toLowerCase().includes("manager"),
  ).length,
};
