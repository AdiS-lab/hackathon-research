import { useState } from "react";
import PoseTracker from "./components/PoseTracker";
import Dashboard from "./pages/Dashboard";
import ExerciseSelector from "./components/ExerciseSelector";
import type { Exercise } from "./lib/exercises";

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [view, setView] = useState<"track" | "dashboard">("track");

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tight">
          Ghost<span className="text-emerald-400">Hand</span> PT
        </h1>
        <nav className="flex gap-4">
          <button
            onClick={() => setView("track")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              view === "track"
                ? "bg-emerald-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Live Tracking
          </button>
          <button
            onClick={() => setView("dashboard")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              view === "dashboard"
                ? "bg-emerald-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Dashboard
          </button>
        </nav>
      </header>

      <main className="p-6">
        {view === "track" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PoseTracker exercise={selectedExercise} />
            </div>
            <div>
              <ExerciseSelector
                selected={selectedExercise}
                onSelect={setSelectedExercise}
              />
            </div>
          </div>
        ) : (
          <Dashboard />
        )}
      </main>
    </div>
  );
}
