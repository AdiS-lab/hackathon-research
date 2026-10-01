import { useTranslationStore } from "../hooks/useTranslationStore";

export default function TranslationHistory() {
  const { history } = useTranslationStore();

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h2 className="font-semibold mb-3">Translation History</h2>

      {history.length === 0 ? (
        <p className="text-sm text-gray-600 text-center py-8">
          Translations will appear here
        </p>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {history.map((entry) => (
            <div
              key={entry.id}
              className="bg-gray-800 rounded-lg p-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    entry.direction === "sign-to-text"
                      ? "bg-violet-500/20 text-violet-300"
                      : "bg-blue-500/20 text-blue-300"
                  }`}
                >
                  {entry.direction === "sign-to-text"
                    ? "ASL -> Text"
                    : "Text -> ASL"}
                </span>
                <span className="text-xs text-gray-600">
                  {new Date(entry.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm text-white">{entry.output}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
