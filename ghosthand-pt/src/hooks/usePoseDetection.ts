import { useRef, useEffect, useState, useCallback } from "react";

export interface Landmark {
  x: number;
  y: number;
  z: number;
  visibility: number;
}

export interface PoseResult {
  landmarks: Landmark[];
  timestamp: number;
}

/**
 * Hook that initializes MediaPipe Pose Landmarker and runs detection on each video frame.
 * Returns the latest pose landmarks and a ref to attach to a <video> element.
 */
export function usePoseDetection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const [pose, setPose] = useState<PoseResult | null>(null);
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
      cancelAnimationFrame(animFrameRef.current);
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((t) => t.stop());
      }
    };
  }, [startCamera]);

  // TODO: During hackathon, initialize PoseLandmarker here:
  // const poseLandmarker = await PoseLandmarker.createFromOptions(vision, { ... });
  // Then in the animation loop: const result = poseLandmarker.detectForVideo(video, timestamp);
  // For now, the hook provides the video/canvas refs and camera setup.

  return { videoRef, canvasRef, pose, isLoading, error };
}
