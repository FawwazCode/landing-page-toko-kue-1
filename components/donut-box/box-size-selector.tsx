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
            className={`rounded-2xl border p-5 text-left transition ${
              active
                ? "border-[#6f4938] bg-[#f3e4d5]"
                : "border-[#e3d7ce] bg-white hover:border-[#b99b87]"
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