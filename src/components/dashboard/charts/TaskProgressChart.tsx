import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    project: "Website",
    completed: 18,
  },

  {
    project: "Mobile App",
    completed: 14,
  },

  {
    project: "Dashboard",
    completed: 11,
  },

  {
    project: "API",
    completed: 9,
  },

  {
    project: "Marketing",
    completed: 6,
  },
];

function TaskProgressChart() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Task Progress</h2>

        <p className="mt-1 text-sm text-slate-400">
          Completed tasks by project.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis type="number" stroke="#94a3b8" />

            <YAxis
              type="category"
              dataKey="project"
              stroke="#94a3b8"
              width={90}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#ffffff",
              }}
            />

            <Bar dataKey="completed" fill="#3b82f6" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default TaskProgressChart;
