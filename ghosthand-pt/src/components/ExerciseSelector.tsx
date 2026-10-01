import { EXERCISES, type Exercise } from "../lib/exercises";

interface Props {
  selected: Exercise | null;
  onSelect: (exercise: Exercise) => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  shoulder: "Shoulder",
  knee: "Knee",
  back: "Back",
  wrist: "Wrist & Elbow",
  hip: "Hip",
};

export default function ExerciseSelector({ selected, onSelect }: Props) {
  const grouped = EXERCISES.reduce(
    (acc, ex) => {
      (acc[ex.category] ||= []).push(ex);
      return acc;
    },
    {} as Record<string, Exercise[]>
  );

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Exercises</h2>

      {Object.entries(grouped).map(([category, exercises]) => (
        <div key={category} className="mb-4">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            {CATEGORY_LABELS[category] ?? category}
          </h3>
          <div className="space-y-2">
            {exercises.map((ex) => (
              <button
                key={ex.id}
                onClick={() => onSelect(ex)}
                className={`w-full text-left px-3 py-2 rounded-lg transition text-sm ${
                  selected?.id === ex.id
                    ? "bg-emerald-500/20 border border-emerald-500 text-emerald-300"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                <div className="font-medium">{ex.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {ex.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
