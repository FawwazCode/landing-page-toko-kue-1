"use client";

import { categories } from "@/data/categories";

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductFilter({
  activeCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const active = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active
                ? "bg-[#6f4938] text-white"
                : "bg-[#f3ebe4] text-[#6f4938] hover:bg-[#eaded4]"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}