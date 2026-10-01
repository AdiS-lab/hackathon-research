import { useSessionStore } from "../hooks/useSessionStore";
import type { Exercise } from "../lib/exercises";

interface Props {
  exercise: Exercise | null;
}

export default function FeedbackOverlay({ exercise }: Props) {
  const { currentReps } = useSessionStore();

  if (!exercise) return null;

  // TODO: During hackathon, this component will receive real-time angle data
  // from the pose detection loop and display:
  // 1. Current angle vs target angle
  // 2. Color-coded feedback (green/yellow/red)
  // 3. Rep counter
  // 4. Audio feedback via Web Speech API

  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
      <div className="bg-gray-900/80 backdrop-blur rounded-lg px-4 py-3">
        <div className="text-sm text-gray-400">Exercise</div>
        <div className="text-lg font-semibold text-emerald-400">
          {exercise.name}
        </div>
      </div>

      <div className="bg-gray-900/80 backdrop-blur rounded-lg px-4 py-3 text-center">
        <div className="text-sm text-gray-400">Reps</div>
        <div className="text-2xl font-bold text-white">
          {currentReps}
          <span className="text-gray-500 text-lg">/{exercise.reps}</span>
        </div>
      </div>

      <div className="bg-gray-900/80 backdrop-blur rounded-lg px-4 py-3 text-center">
        <div className="text-sm text-gray-400">Target</div>
        <div className="text-lg font-semibold text-white">
          {exercise.targetAngle}°
        </div>
      </div>
    </div>
  );
}
