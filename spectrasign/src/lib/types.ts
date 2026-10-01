export interface HandLandmark {
  x: number;
  y: number;
  z: number;
}

export interface SignDetection {
  sign: string; // detected ASL sign/letter
  confidence: number; // 0-1
  timestamp: number;
}

export interface TranslationEntry {
  id: string;
  direction: "sign-to-text" | "text-to-sign";
  input: string;
  output: string;
  timestamp: number;
}

export type AppMode = "sign-to-text" | "text-to-sign";

export const ASL_ALPHABET = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z",
  "space", "delete",
] as const;

export type ASLLetter = (typeof ASL_ALPHABET)[number];
