import { create } from "zustand";
import type { TranslationEntry, AppMode, SignDetection } from "../lib/types";

interface TranslationState {
  mode: AppMode;
  currentBuffer: string; // accumulated signs or text
  history: TranslationEntry[];
  setMode: (mode: AppMode) => void;
  appendSign: (detection: SignDetection) => void;
  setBuffer: (text: string) => void;
  commitTranslation: () => void;
  clearBuffer: () => void;
}

export const useTranslationStore = create<TranslationState>((set, get) => ({
  mode: "sign-to-text",
  currentBuffer: "",
  history: [],

  setMode: (mode: AppMode) => set({ mode, currentBuffer: "" }),

  appendSign: (detection: SignDetection) => {
    if (detection.confidence < 0.7) return;

    set((s) => {
      if (detection.sign === "space") {
        return { currentBuffer: s.currentBuffer + " " };
      }
      if (detection.sign === "delete") {
        return { currentBuffer: s.currentBuffer.slice(0, -1) };
      }
      return { currentBuffer: s.currentBuffer + detection.sign };
    });
  },

  setBuffer: (text: string) => set({ currentBuffer: text }),

  commitTranslation: () => {
    const { mode, currentBuffer, history } = get();
    if (!currentBuffer.trim()) return;

    const entry: TranslationEntry = {
      id: crypto.randomUUID(),
      direction: mode,
      input: currentBuffer,
      output: currentBuffer, // TODO: Run through translation/correction LLM
      timestamp: Date.now(),
    };

    set({
      history: [entry, ...history].slice(0, 50),
      currentBuffer: "",
    });
  },

  clearBuffer: () => set({ currentBuffer: "" }),
}));
