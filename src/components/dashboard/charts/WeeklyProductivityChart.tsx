import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    day: "Mon",
    completed: 8,
  },

  {
    day: "Tue",
    completed: 12,
  },

  {
    day: "Wed",
    completed: 9,
  },

  {
    day: "Thu",
    completed: 15,
  },

  {
    day: "Fri",
    completed: 18,
  },

  {
    day: "Sat",
    completed: 11,
  },

  {
    day: "Sun",
    completed: 6,
  },
];

function WeeklyProductivityChart() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Weekly Productivity
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Tasks completed during the week.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis dataKey="day" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#ffffff",
              }}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="completed"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#3b82f6",
              }}
              activeDot={{
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default WeeklyProductivityChart;
