import { useHandDetection } from "../hooks/useHandDetection";
import { useTranslationStore } from "../hooks/useTranslationStore";

export default function SignToText() {
  const { videoRef, canvasRef, isLoading, error } = useHandDetection();
  const { currentBuffer, commitTranslation, clearBuffer } =
    useTranslationStore();

  return (
    <div className="space-y-4">
      <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="text-gray-400">Starting camera...</div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="text-red-400 px-8 text-center">{error}</div>
          </div>
        )}

        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          style={{ transform: "scaleX(-1)" }}
          playsInline
          muted
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ transform: "scaleX(-1)" }}
        />

        {/* Live detection overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">Detected signs</div>
          <div className="text-lg font-mono text-violet-300 min-h-[1.5em]">
            {currentBuffer || (
              <span className="text-gray-600">
                Show ASL signs to the camera...
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={commitTranslation}
          className="flex-1 bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-lg font-medium transition"
        >
          Save Translation
        </button>
        <button
          onClick={clearBuffer}
          className="px-6 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 rounded-lg transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
