"use client";

import { donutBoxes } from "@/data/donut-boxes";

interface BoxSizeSelectorProps {
  value: number;
  onChange: (size: number) => void;
}

export function BoxSizeSelector({
  value,
  onChange,
}: BoxSizeSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {donutBoxes.map((box) => {
        const active = value === box.size;

        return (
          <button
            key={box.id}
            onClick={() => onChange(box.size)}
            className={`rounded-2xl border p-5 text-left transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2 ${
              active
                ? "border-[#6f4938] bg-[#f3e4d5] hover:border-[#4c3024] hover:bg-[#ead6c4]"
                : "border-[#e3d7ce] bg-white hover:border-[#9a6b52] hover:bg-[#f1e7df]"
            }`}
          >
            <p className="font-serif text-xl font-bold text-[#30231e]">
              {box.name}
            </p>

            <p className="mt-1 text-xs text-[#81736a]">
              {box.description}
            </p>

            <p className="mt-4 text-sm font-semibold text-[#6f4938]">
              Holds {box.size} cake slices
            </p>
          </button>
        );
      })}
    </div>
  );
}