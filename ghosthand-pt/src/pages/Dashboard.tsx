import { useSessionStore } from "../hooks/useSessionStore";
import { EXERCISES } from "../lib/exercises";

export default function Dashboard() {
  const { sessions } = useSessionStore();

  const totalSessions = sessions.length;
  const totalReps = sessions.reduce((sum, s) => sum + s.repsCompleted, 0);
  const avgAccuracy =
    sessions.length > 0
      ? sessions.reduce((sum, s) => sum + s.avgAccuracy, 0) / sessions.length
      : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold">Recovery Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Sessions" value={totalSessions} />
        <StatCard label="Total Reps" value={totalReps} />
        <StatCard
          label="Avg Accuracy"
          value={`${Math.round(avgAccuracy * 100)}%`}
        />
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <h3 className="text-lg font-medium mb-4">Session History</h3>
        {sessions.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No sessions yet. Complete an exercise to see your progress.
          </p>
        ) : (
          <div className="space-y-3">
            {sessions
              .slice()
              .reverse()
              .map((session, i) => {
                const exercise = EXERCISES.find(
                  (e) => e.id === session.exerciseId
                );
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3"
                  >
                    <div>
                      <div className="font-medium">
                        {exercise?.name ?? session.exerciseId}
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(session.timestamp).toLocaleString()}
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-gray-500">Reps:</span>{" "}
                        {session.repsCompleted}
                      </div>
                      <div>
                        <span className="text-gray-500">Accuracy:</span>{" "}
                        <span
                          className={
                            session.avgAccuracy >= 0.8
                              ? "text-emerald-400"
                              : session.avgAccuracy >= 0.6
                                ? "text-yellow-400"
                                : "text-red-400"
                          }
                        >
                          {Math.round(session.avgAccuracy * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}
