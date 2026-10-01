import { useState } from "react";
import { ASL_ALPHABET } from "../lib/types";

export default function TextToSign() {
  const [inputText, setInputText] = useState("");
  const letters = inputText.toUpperCase().split("");

  return (
    <div className="space-y-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <label className="text-sm text-gray-400 block mb-2">
          Type or speak English text
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Hello world..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500"
          />
          <button
            onClick={() => {
              // TODO: During hackathon, use Web Speech API for voice input
              // const recognition = new webkitSpeechRecognition();
              alert("Voice input - implement with Web Speech API");
            }}
            className="px-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 border border-gray-700"
          >
            Mic
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <h3 className="text-sm text-gray-400 mb-3">ASL Translation</h3>

        {letters.length === 0 ? (
          <p className="text-gray-600 text-center py-8">
            Type something above to see the ASL finger-spelling guide
          </p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {letters.map((letter, i) => {
              const isKnown =
                ASL_ALPHABET.includes(letter as (typeof ASL_ALPHABET)[number]) ||
                letter === " ";
              return (
                <div
                  key={i}
                  className={`w-16 h-16 rounded-lg flex flex-col items-center justify-center ${
                    letter === " "
                      ? "bg-transparent w-4"
                      : isKnown
                        ? "bg-violet-500/20 border border-violet-500/40"
                        : "bg-gray-800 border border-gray-700"
                  }`}
                >
                  {letter !== " " && (
                    <>
                      <span className="text-lg font-bold text-white">
                        {letter}
                      </span>
                      <span className="text-[10px] text-gray-500">
                        {isKnown ? "ASL" : "?"}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <p className="text-xs text-gray-600 mt-4">
          During hackathon: Replace letter tiles with animated 3D hand models
          showing the ASL sign for each letter/word.
        </p>
      </div>
    </div>
  );
}
