import type { IconType } from "react-icons";

interface StatCardProps {
  title: string;
  value: number;
  icon: IconType;
  color?: "blue" | "emerald" | "amber" | "purple";
}

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
  },
};

function StatCard({ title, value, icon: Icon, color = "blue" }: StatCardProps) {
  const styles = colorClasses[color];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:border-slate-700 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-white">{value}</h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles.bg}`}
        >
          <Icon className={`text-2xl ${styles.text}`} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
