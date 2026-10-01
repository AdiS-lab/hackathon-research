import { useSensorStore } from "../hooks/useSensorStore";

const SEVERITY_STYLES = {
  info: "border-blue-500/30 bg-blue-500/5",
  warning: "border-yellow-500/30 bg-yellow-500/5",
  critical: "border-red-500/30 bg-red-500/5",
};

const SEVERITY_DOT = {
  info: "bg-blue-400",
  warning: "bg-yellow-400",
  critical: "bg-red-400",
};

export default function AlertPanel() {
  const { alerts, acknowledgeAlert } = useSensorStore();
  const active = alerts.filter((a) => !a.acknowledged);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold">Alerts</h2>
        {active.length > 0 && (
          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
            {active.length}
          </span>
        )}
      </div>

      {active.length === 0 ? (
        <p className="text-sm text-gray-600 text-center py-4">
          All clear
        </p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {active.map((alert) => (
            <div
              key={alert.id}
              className={`border rounded-lg p-3 ${SEVERITY_STYLES[alert.severity]}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${SEVERITY_DOT[alert.severity]}`}
                  />
                  <span className="text-xs uppercase text-gray-400">
                    {alert.type}
                  </span>
                </div>
                <button
                  onClick={() => acknowledgeAlert(alert.id)}
                  className="text-xs text-gray-500 hover:text-white"
                >
                  Dismiss
                </button>
              </div>
              <p className="text-sm mt-1">{alert.message}</p>
              <p className="text-xs text-gray-600 mt-1">
                {new Date(alert.timestamp).toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
