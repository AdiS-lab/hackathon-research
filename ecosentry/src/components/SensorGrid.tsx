import { useSensorStore } from "../hooks/useSensorStore";

const STATUS_COLORS = {
  online: "bg-green-500",
  offline: "bg-gray-500",
  warning: "bg-yellow-500",
};

export default function SensorGrid() {
  const { nodes } = useSensorStore();

  if (nodes.length === 0) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
        <p className="text-gray-500">
          No sensors connected. Start the backend and connect Raspberry Pi nodes.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="bg-gray-900 border border-gray-800 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">{node.name}</h3>
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <span
                className={`w-2 h-2 rounded-full ${STATUS_COLORS[node.status]}`}
              />
              {node.status}
            </span>
          </div>

          <p className="text-xs text-gray-500 mb-3">{node.location}</p>

          {node.lastReading ? (
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Metric
                label="Temp"
                value={`${node.lastReading.temperature.toFixed(1)}°C`}
              />
              <Metric
                label="Humidity"
                value={`${node.lastReading.humidity.toFixed(0)}%`}
              />
              <Metric
                label="CO2"
                value={`${node.lastReading.co2.toFixed(0)} ppm`}
              />
              <Metric
                label="PM2.5"
                value={`${node.lastReading.pm25.toFixed(1)} ug/m3`}
              />
              <Metric
                label="Noise"
                value={`${node.lastReading.noise.toFixed(0)} dB`}
              />
              <Metric
                label="VOC"
                value={`${node.lastReading.voc.toFixed(0)} ppb`}
              />
            </div>
          ) : (
            <p className="text-xs text-gray-600">Awaiting first reading...</p>
          )}
        </div>
      ))}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-800 rounded px-2 py-1.5">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-medium text-white">{value}</div>
    </div>
  );
}
