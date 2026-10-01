import { useSensorStore } from "../hooks/useSensorStore";

const AGENT_COLORS: Record<string, string> = {
  "anomaly-detector": "text-red-400",
  "trend-predictor": "text-blue-400",
  advisor: "text-green-400",
};

const AGENT_LABELS: Record<string, string> = {
  "anomaly-detector": "Anomaly Detector",
  "trend-predictor": "Trend Predictor",
  advisor: "Advisor",
};

export default function AgentFeed() {
  const { agentMessages } = useSensorStore();

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h2 className="font-semibold mb-3">AI Agent Feed</h2>

      {agentMessages.length === 0 ? (
        <p className="text-sm text-gray-600 text-center py-4">
          Agents are monitoring...
        </p>
      ) : (
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {agentMessages.map((msg, i) => (
            <div key={i} className="border-l-2 border-gray-700 pl-3">
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-medium ${AGENT_COLORS[msg.agentName] ?? "text-gray-400"}`}
                >
                  {AGENT_LABELS[msg.agentName] ?? msg.agentName}
                </span>
                <span className="text-xs text-gray-600">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-0.5">{msg.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
