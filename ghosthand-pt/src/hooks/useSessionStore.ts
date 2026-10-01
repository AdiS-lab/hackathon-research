import { create } from "zustand";
import type { SessionRecord } from "../lib/exercises";

interface SessionState {
  sessions: SessionRecord[];
  currentReps: number;
  currentAccuracies: number[];
  addRep: (accuracy: number) => void;
  resetSession: () => void;
  saveSession: (exerciseId: string, feedback: string[]) => void;
}

export const useSessionStore = create<SessionState>((set, get) => ({
  sessions: [],
  currentReps: 0,
  currentAccuracies: [],

  addRep: (accuracy: number) =>
    set((s) => ({
      currentReps: s.currentReps + 1,
      currentAccuracies: [...s.currentAccuracies, accuracy],
    })),

  resetSession: () => set({ currentReps: 0, currentAccuracies: [] }),

  saveSession: (exerciseId: string, feedback: string[]) => {
    const { currentReps, currentAccuracies, sessions } = get();
    const avgAccuracy =
      currentAccuracies.length > 0
        ? currentAccuracies.reduce((a, b) => a + b, 0) /
          currentAccuracies.length
        : 0;

    const record: SessionRecord = {
      exerciseId,
      timestamp: Date.now(),
      repsCompleted: currentReps,
      avgAccuracy,
      feedback,
    };

    set({
      sessions: [...sessions, record],
      currentReps: 0,
      currentAccuracies: [],
    });
  },
}));
