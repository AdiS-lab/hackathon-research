import { useSensorSocket } from "./hooks/useSensorSocket";
import SensorGrid from "./components/SensorGrid";
import AlertPanel from "./components/AlertPanel";
import AgentFeed from "./components/AgentFeed";
import MetricChart from "./components/MetricChart";

export default function App() {
  useSensorSocket();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tight">
          Eco<span className="text-green-400">Sentry</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-400">Live</span>
        </div>
      </header>

      <main className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <SensorGrid />
          <MetricChart />
        </div>
        <div className="space-y-6">
          <AlertPanel />
          <AgentFeed />
        </div>
      </main>
    </div>
  );
}
