export interface Exercise {
  id: string;
  name: string;
  description: string;
  targetJoints: JointPair[];
  targetAngle: number;
  toleranceDeg: number;
  reps: number;
  category: "shoulder" | "knee" | "back" | "wrist" | "hip";
}

export interface JointPair {
  a: string; // MediaPipe landmark name
  b: string; // vertex (joint being measured)
  c: string; // other end
}

export interface SessionRecord {
  exerciseId: string;
  timestamp: number;
  repsCompleted: number;
  avgAccuracy: number;
  feedback: string[];
}

export const EXERCISES: Exercise[] = [
  {
    id: "shoulder-flexion",
    name: "Shoulder Flexion",
    description: "Raise arm forward and up to 90 degrees",
    targetJoints: [{ a: "LEFT_HIP", b: "LEFT_SHOULDER", c: "LEFT_WRIST" }],
    targetAngle: 90,
    toleranceDeg: 10,
    reps: 10,
    category: "shoulder",
  },
  {
    id: "shoulder-abduction",
    name: "Shoulder Abduction",
    description: "Raise arm out to the side to 90 degrees",
    targetJoints: [{ a: "LEFT_HIP", b: "LEFT_SHOULDER", c: "LEFT_ELBOW" }],
    targetAngle: 90,
    toleranceDeg: 10,
    reps: 10,
    category: "shoulder",
  },
  {
    id: "knee-extension",
    name: "Seated Knee Extension",
    description: "Extend knee from 90 to 180 degrees while seated",
    targetJoints: [{ a: "LEFT_HIP", b: "LEFT_KNEE", c: "LEFT_ANKLE" }],
    targetAngle: 170,
    toleranceDeg: 15,
    reps: 10,
    category: "knee",
  },
  {
    id: "elbow-flexion",
    name: "Elbow Flexion (Bicep Curl)",
    description: "Curl arm from extended to 45 degrees",
    targetJoints: [
      { a: "LEFT_SHOULDER", b: "LEFT_ELBOW", c: "LEFT_WRIST" },
    ],
    targetAngle: 45,
    toleranceDeg: 10,
    reps: 12,
    category: "wrist",
  },
  {
    id: "hip-flexion",
    name: "Standing Hip Flexion",
    description: "Lift knee toward chest to 90 degrees",
    targetJoints: [
      { a: "LEFT_SHOULDER", b: "LEFT_HIP", c: "LEFT_KNEE" },
    ],
    targetAngle: 90,
    toleranceDeg: 15,
    reps: 10,
    category: "hip",
  },
];
