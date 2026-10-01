import { useState } from "react";
import { useSensorStore } from "../hooks/useSensorStore";
import { THRESHOLDS } from "../lib/types";

export default function MetricChart() {
  const { nodes, readings } = useSensorStore();
  const [selectedSensor, setSelectedSensor] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<string>("temperature");

  const sensorId = selectedSensor ?? nodes[0]?.id;
  const history = sensorId ? (readings.get(sensorId) ?? []) : [];
  const threshold = THRESHOLDS.find((t) => t.metric === selectedMetric);

  // TODO: During hackathon, replace with Recharts LineChart/AreaChart.
  // For now, display a simple table of recent values.

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Sensor History</h2>
        <div className="flex gap-2">
          <select
            value={sensorId ?? ""}
            onChange={(e) => setSelectedSensor(e.target.value)}
            className="bg-gray-800 text-sm rounded px-2 py-1 text-gray-300 border border-gray-700"
          >
            {nodes.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name}
              </option>
            ))}
          </select>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="bg-gray-800 text-sm rounded px-2 py-1 text-gray-300 border border-gray-700"
          >
            {THRESHOLDS.map((t) => (
              <option key={t.metric} value={t.metric}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {history.length === 0 ? (
        <p className="text-sm text-gray-600 text-center py-8">
          No data yet. Connect a sensor to see real-time charts.
        </p>
      ) : (
        <div className="text-sm text-gray-400">
          <p>
            Latest:{" "}
            <span className="text-white font-medium">
              {(history[history.length - 1] as Record<string, number>)[
                selectedMetric
              ]?.toFixed(1)}{" "}
              {threshold?.unit}
            </span>
          </p>
          <p className="text-xs mt-1">
            Threshold: {threshold?.warningMax} {threshold?.unit} (warning) /{" "}
            {threshold?.max} {threshold?.unit} (critical)
          </p>
          <p className="text-xs text-gray-600 mt-2">
            {history.length} readings recorded. Recharts visualization goes here during hackathon.
          </p>
        </div>
      )}
    </div>
  );
}
