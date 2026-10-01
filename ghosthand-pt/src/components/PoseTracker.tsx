import { usePoseDetection } from "../hooks/usePoseDetection";
import FeedbackOverlay from "./FeedbackOverlay";
import type { Exercise } from "../lib/exercises";

interface Props {
  exercise: Exercise | null;
}

export default function PoseTracker({ exercise }: Props) {
  const { videoRef, canvasRef, isLoading, error } = usePoseDetection();

  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-gray-400 text-lg">Starting camera...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-red-400 text-center px-8">{error}</div>
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full aspect-video object-cover mirror"
        style={{ transform: "scaleX(-1)" }}
        playsInline
        muted
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ transform: "scaleX(-1)" }}
      />

      <FeedbackOverlay exercise={exercise} />

      {!exercise && !isLoading && !error && (
        <div className="absolute bottom-4 left-4 right-4 bg-gray-800/90 rounded-lg p-4 text-center">
          <p className="text-gray-300">
            Select an exercise from the panel to start tracking
          </p>
        </div>
      )}
    </div>
  );
}
