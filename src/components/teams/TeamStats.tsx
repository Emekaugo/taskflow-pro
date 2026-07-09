import { FaUsers, FaCode, FaPalette, FaUserTie } from "react-icons/fa6";

interface TeamStatsProps {
  totalMembers: number;
  developers: number;
  designers: number;
  managers: number;
}

function TeamStats({
  totalMembers,
  developers,
  designers,
  managers,
}: TeamStatsProps) {
  const stats = [
    {
      title: "Total Members",
      value: totalMembers,
      icon: FaUsers,
      color: "text-blue-400",
    },
    {
      title: "Developers",
      value: developers,
      icon: FaCode,
      color: "text-emerald-400",
    },
    {
      title: "Designers",
      value: designers,
      icon: FaPalette,
      color: "text-purple-400",
    },
    {
      title: "Managers",
      value: managers,
      icon: FaUserTie,
      color: "text-amber-400",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:border-blue-500 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-400">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {stat.value}
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800">
                <Icon className={`text-2xl ${stat.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TeamStats;
