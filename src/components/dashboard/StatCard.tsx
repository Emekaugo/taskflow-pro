import type { IconType } from "react-icons";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

interface StatCardProps {
  title: string;

  value: number;

  icon: IconType;

  color: string;

  change: number;

  trend: "up" | "down";

  description: string;

  unit?: string;
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
  change,
  trend,
  description,
  unit,
}: StatCardProps) {
  const TrendIcon = trend === "up" ? FaArrowTrendUp : FaArrowTrendDown;

  const trendColor = trend === "up" ? "text-emerald-400" : "text-red-400";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 flex items-end gap-1 text-4xl font-bold text-white">
            {value}

            {unit && (
              <span className="text-lg font-medium text-slate-400">{unit}</span>
            )}
          </h2>

          <p className="mt-2 text-sm text-slate-500">{description}</p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800">
          <Icon className={`text-2xl ${color}`} />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <TrendIcon className={`text-sm ${trendColor}`} />

        <span className={`text-sm font-semibold ${trendColor}`}>{change}%</span>

        <span className="text-sm text-slate-500">vs last month</span>
      </div>
    </div>
  );
}

export default StatCard;
