interface Activity {
  id: string;
  title: string;
  type: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Recent Activity</h2>

        <span className="text-sm text-slate-400">
          {activities.length} item
          {activities.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Empty State */}

      {activities.length === 0 ? (
        <div className="flex h-40 items-center justify-center">
          <p className="text-slate-500">No recent activity.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-blue-500"
            >
              <div>
                <h3 className="font-medium text-white">{activity.title}</h3>

                <p className="mt-1 text-sm text-slate-400">{activity.type}</p>
              </div>

              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                New
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentActivity;
