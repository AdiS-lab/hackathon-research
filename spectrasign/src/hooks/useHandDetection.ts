import { useRef, useEffect, useState, useCallback } from "react";
import type { HandLandmark, SignDetection } from "../lib/types";

/**
 * Hook that initializes MediaPipe Hand Landmarker and runs detection on video frames.
 * Returns hand landmarks and the latest detected sign.
 */
export function useHandDetection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [landmarks, setLandmarks] = useState<HandLandmark[][]>([]);
  const [detection, setDetection] = useState<SignDetection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480, facingMode: "user" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setIsLoading(false);
    } catch {
      setError("Camera access denied. Please allow camera permissions.");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    startCamera();
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((t) => t.stop());
      }
    };
  }, [startCamera]);

  // TODO: During hackathon:
  // 1. Initialize HandLandmarker from @mediapipe/tasks-vision
  // 2. Run detection loop on each animation frame
  // 3. Pass hand landmarks to a sign classification model
  // 4. Update `detection` with classified sign + confidence

  return {
    videoRef,
    canvasRef,
    landmarks,
    detection,
    isLoading,
    error,
    setLandmarks,
    setDetection,
  };
}
