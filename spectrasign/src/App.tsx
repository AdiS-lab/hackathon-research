import { useTranslationStore } from "./hooks/useTranslationStore";
import SignToText from "./components/SignToText";
import TextToSign from "./components/TextToSign";
import TranslationHistory from "./components/TranslationHistory";
import type { AppMode } from "./lib/types";

export default function App() {
  const { mode, setMode } = useTranslationStore();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tight">
          Spectra<span className="text-violet-400">Sign</span>
        </h1>
        <div className="flex bg-gray-800 rounded-lg p-1">
          <ModeButton
            active={mode === "sign-to-text"}
            onClick={() => setMode("sign-to-text")}
            label="ASL -> Text"
          />
          <ModeButton
            active={mode === "text-to-sign"}
            onClick={() => setMode("text-to-sign")}
            label="Text -> ASL"
          />
        </div>
      </header>

      <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {mode === "sign-to-text" ? <SignToText /> : <TextToSign />}
        </div>
        <div>
          <TranslationHistory />
        </div>
      </main>
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition ${
        active
          ? "bg-violet-500 text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
