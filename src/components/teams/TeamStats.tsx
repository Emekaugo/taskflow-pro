import {
  FaCode,
  FaLayerGroup,
  FaPeopleGroup,
  FaUserTie,
} from "react-icons/fa6";

import { getTeamStatistics, type TeamMember } from "../../data/team";

interface TeamStatsProps {
  members: TeamMember[];
}

function TeamStats({ members }: TeamStatsProps) {
  const stats = getTeamStatistics(members);

  const cards = [
    {
      title: "Total Members",
      value: stats.total,
      icon: FaPeopleGroup,
      color: "text-blue-400",
    },
    {
      title: "Frontend",
      value: stats.frontend,
      icon: FaCode,
      color: "text-emerald-400",
    },
    {
      title: "Backend",
      value: stats.backend,
      icon: FaLayerGroup,
      color: "text-amber-400",
    },
    {
      title: "Managers",
      value: stats.managers,
      icon: FaUserTie,
      color: "text-violet-400",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{card.title}</p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {card.value}
                </h2>
              </div>

              <div className={`rounded-xl bg-slate-800 p-4 ${card.color}`}>
                <Icon className="text-xl" />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default TeamStats;
